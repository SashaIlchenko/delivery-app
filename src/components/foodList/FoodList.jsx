import { FoodCard } from "components/foogCard/FoodCard";
import { useState, useEffect } from "react";
import { FoodListStyle } from "./FoodList.styled";
import { toast } from "react-hot-toast";

export const FoodList = ({ food }) => {
    const [orderFood, setOrderFood] = useState(() => JSON.parse(localStorage.getItem('order')) || []);
    useEffect(() => {
        localStorage.setItem('order', JSON.stringify(orderFood));
    }, [orderFood]);

    const handleClick = (item) => {
        const checkId = orderFood.find(product => product._id === item._id);
        if (checkId) {
            return toast.error('Have allready added. Go to your cart, please.')
        }
        setOrderFood([...orderFood, item])
        localStorage.setItem('order', JSON.stringify(orderFood))

    }
    return (

        <FoodListStyle>{food.map(item => {
            return <FoodCard key={item._id} food={item} onClick={handleClick} />
        })}</FoodListStyle>
    )
}

