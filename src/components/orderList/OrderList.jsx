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
    TotalPriceLabel
} from "./OrderList.styled";
import { FiTrash2 } from "react-icons/fi";

export const OrderList = ({ user }) => {
    const [currentOrder, setCurrentorder] = useState([]);
    const [count, setCount] = useState(JSON.parse(localStorage.getItem('count')) || 0);
    // const [currentPrice, setCurrentPrice] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('order'));
        setCurrentorder(data);
    }, []);
    useEffect(() => {
        localStorage.setItem('order', JSON.stringify(currentOrder))
        localStorage.setItem('count', JSON.stringify(count))
        const price = currentOrder.reduce((acc, item) => acc + item.price * count[item._id], 0);
        setTotalPrice(price);
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
    }
    return (
        <div>
            {currentOrder ? <OrderListStyle> {
                currentOrder.map(order => {
                    return <Item key={order.id}>
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
            }</OrderListStyle> : "Please, add products!"}
            <TotalPriceLabel>Total price: {totalPrice} </TotalPriceLabel>
            <button type='submit'>Sumbit</button>
        </div>
    )
}