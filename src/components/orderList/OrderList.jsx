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
    DeleteBtn
} from "./OrderList.styled";

export const OrderList = () => {
    const [currentOrder, setCurrentorder] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('order'));
        setCurrentorder(data);
    }, []);
    useEffect(() => {
        localStorage.setItem('order', JSON.stringify(currentOrder))
    }, [currentOrder])

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
        const deleteOrder = currentOrder.filter(order => order.id !== itemId)
        setCurrentorder(deleteOrder)
    };
    const changePrice = (itemId) => {
        const object = currentOrder.filter(order => order.id === itemId);
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
                        <div><FoodInfo>Price: {changePrice(order.id) || order.price}</FoodInfo>
                            <FoodInfo>{order.title}</FoodInfo></div>
                        <CounterWrapper>
                            <CounterBtn
                                type="button"
                                onClick={() => handleDecrement(order.id)}
                            >
                                -
                            </CounterBtn>
                            <InputCounter
                                type="text"
                                name="counter"
                                value={count[order.id] || 0}
                                readOnly
                            />
                            <CounterBtn
                                type="button"
                                onClick={() => handleIncrement(order.id)}
                            >
                                +
                            </CounterBtn>
                        </CounterWrapper>
                        <DeleteBtn type='button' onClick={() => handleDeleteBtn(order.id)}>Delete</DeleteBtn>
                    </Item>
                })
            }</OrderListStyle> : "Please, add products!"}
        </div>
    )
}