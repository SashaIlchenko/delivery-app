
import { BtnWrapper, ShopBtn } from "./ShopsBar.styled"
export const ShopsBar = ({ onClick }) => {

    const handleClick = (event) => {
        onClick(event.target.innerText)
        localStorage.setItem('currentShop', JSON.stringify(event.target.innerText))
    }
    return (
        <BtnWrapper>
            <ShopBtn type='button' onClick={handleClick}>MC Pizza</ShopBtn>
            <ShopBtn type='button' onClick={handleClick}>MC donny</ShopBtn>
            <ShopBtn type='button' onClick={handleClick}>MC Sushi</ShopBtn>
        </BtnWrapper>)
}