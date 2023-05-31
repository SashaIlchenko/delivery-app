// import { useState } from "react";
import { BtnWrapper, ShopBtn } from "./ShopsBar.styled"
export const ShopsBar = ({ onClick }) => {

    const handleClick = (event) => {

        onClick(event.target.innerText)
    }
    return (<BtnWrapper><ShopBtn type='button' onClick={handleClick}>MC Pizza</ShopBtn>
        <ShopBtn type='button'>MC donny</ShopBtn>
        <ShopBtn type='button'>Sushi yam</ShopBtn>
    </BtnWrapper>)
}