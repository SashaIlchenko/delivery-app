import { useState, useEffect } from "react";
import { ShopsBar } from "components/shopsBar/ShopsBar";
import { FoodList } from "components/foodList/FoodList";
import { getFood } from "services/API";


const ShopPage = () => {
    const [food, setFood] = useState([]);
    const [currentShop, setCurrentShop] = useState(() => JSON.parse(localStorage.getItem('currentShop')) || '');
    const [filterFood, setFilterFood] = useState([]);
    useEffect(() => {

        async function getFoodsData() {
            try {
                const foodData = await getFood();
                setFood([...foodData]);
            }
            catch (err) {
                console.log(err)
            }
        }
        getFoodsData();
    }, []);
    useEffect(() => {
        const filterShop = food.filter(item => {
            return item.shop.toLowerCase() === currentShop.toLowerCase()
        })
        setFilterFood(filterShop)
    }, [currentShop, food])
    const toChooseShop = (value) => {
        setCurrentShop(value);

    }

    return (<div><ShopsBar onClick={toChooseShop} />
        {!currentShop.length && <div ><h1 className="title">Please, choose a shop!</h1></div>}
        {filterFood && <FoodList food={filterFood} />}</div>)
}
export default ShopPage;