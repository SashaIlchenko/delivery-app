import { useState, useEffect } from "react";
import {
    OrderListStyle,
    Item,
    Wrapper,
    Photo,
    FoodInfo,
    CounterWrapper,
    CounterBtn,
    InputCounter,
    DeleteBtn,
    TotalPriceLabel,
    SubBtn
} from "./OrderList.styled";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { addOrder } from "services/API";

export const OrderList = ({ user }) => {
    const [currentOrder, setCurrentorder] = useState([]);
    const [count, setCount] = useState(JSON.parse(localStorage.getItem('count')) || 0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [load, setLoad] = useState(false);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('order'));
        setCurrentorder(data);
        ;
    }, []);
    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
        const price = currentOrder.reduce((acc, item) => Number(acc + item.price * count[item._id]), 0);
        setTotalPrice(price)
    }, [currentOrder, count])

    const handleIncrement = itemId => {
        setCount(prevCounts => ({
            ...prevCounts,
            [itemId]: (prevCounts[itemId] || 0) + 1,
        }));
    };
    const handleDecrement = itemId => {
        setCount(prevCounts => {
            const newCount = (prevCounts[itemId] || 0) - 1;
            return {
                ...prevCounts,
                [itemId]: newCount >= 0 ? newCount : 0,
            };
        });
    };
    const handleDeleteBtn = (itemId) => {
        const deleteOrder = currentOrder.filter(order => order._id !== itemId)
        setCurrentorder(deleteOrder)
    };
    const changePrice = (itemId) => {
        const object = currentOrder.filter(order => order._id === itemId);
        for (const item of object) {
            return Number(item.price) * count[itemId];
        }
    };
    const handleSubClick = async () => {
        if (!user) {
            return toast.error('Please, type all inputs of form')
        }
        try {
            await addOrder({ user, currentOrder, count, totalPrice });
            setCurrentorder([]);
            setLoad(true);
            setCount(0);
            setTotalPrice(0);
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
            {!load ? <OrderListStyle> {
                currentOrder.map(order => {
                    return <Item key={order._id}>
                        <Wrapper><Photo src={order.photo} alt={order.title} /></Wrapper>
                        <div><FoodInfo>Price: {changePrice(order._id) || order.price}</FoodInfo>
                            <FoodInfo>{order.title}</FoodInfo></div>
                        <CounterWrapper>
                            <CounterBtn
                                type="button"
                                onClick={() => handleDecrement(order._id)}
                            >
                                -
                            </CounterBtn>
                            <InputCounter
                                type="text"
                                name="counter"
                                value={count[order._id] || 0}
                                readOnly
                            />
                            <CounterBtn
                                type="button"
                                onClick={() => handleIncrement(order._id)}
                            >
                                +
                            </CounterBtn>
                        </CounterWrapper>
                        <DeleteBtn type='button' onClick={() => handleDeleteBtn(order._id)}><FiTrash2 /></DeleteBtn>
                    </Item>
                })
            }</OrderListStyle> : <h1 className="title">"Please, add products!"</h1>}
            {!currentOrder.length || <><TotalPriceLabel>Total price: {totalPrice || "Please, select count of all orders"}</TotalPriceLabel>
                <SubBtn type='submit' onClick={handleSubClick}>Sumbit</SubBtn></>}
            {load && <h1 className="title">Thank you {user.name} for your odrder number "{user.id}". We will contact you soon.</h1>}
        </div>
    )
}