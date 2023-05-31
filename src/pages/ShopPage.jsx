import { useState, useEffect } from "react";

import { ShopsBar } from "components/shopsBar/ShopsBar";
import { FoodList } from "components/foodList/FoodList";
import { getFood } from "services/API";


const ShopPage = () => {

    const [food, setFood] = useState([]);
    const [currentShop, setCurrentShop] = useState('');
    const toChooseShop = (value) => {
        setCurrentShop(value)
    }

    useEffect(() => {
        async function getFoodsData() {
            try {
                const foodData = await getFood();
                console.log(foodData)
                setFood([...foodData]);
            }
            catch (err) {
                console.log(err)
            }
        }
        getFoodsData();
    }, [currentShop]);

    return (<div><ShopsBar onClick={toChooseShop} />
        <FoodList food={food} /></div>)
}
export default ShopPage;