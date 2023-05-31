// import { useState } from 'react';
import { Item, Wrapper, Photo, FoodInfo, OrderBtn } from "./FoodCard.styled"

export const FoodCard = ({ food, onClick }) => {
    return (< Item><Wrapper>
        <Photo src={food.photo} alt={food.title} /></Wrapper>
        <FoodInfo>{food.title}</FoodInfo><OrderBtn type='button' onClick={() => onClick(food)}>To Cart</OrderBtn></ Item>)
}