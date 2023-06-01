import { FoodCard } from "components/foogCard/FoodCard";
import { useState, useEffect } from "react";
import { FoodListStyle } from "./FoodList.styled";
import { toast } from "react-hot-toast";

export const FoodList = ({ food, onClick }) => {
    const [orderFood, setOrderFood] = useState(() => JSON.parse(localStorage.getItem('order')) || []);
    useEffect(() => {
        localStorage.setItem('order', JSON.stringify(orderFood));
    }, [orderFood]);

    const handleClick = (item) => {
        const checkId = orderFood.find(product => product.id === item.id);
        if (checkId) {
            return toast.error('Have allready added. Go to your cart, please.')
        }
        setOrderFood([...orderFood, item])
        localStorage.setItem('order', JSON.stringify(orderFood))
        console.log(orderFood)

    }
    return (
        // <div><div><h1>Please, choose shop</h1></div>
        <FoodListStyle>{food.map(item => {
            return <FoodCard key={item._id} food={item} onClick={handleClick} />
        })}</FoodListStyle>
    )
}

