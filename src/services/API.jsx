import axios from "axios";

const BASE_URL = 'http://localhost:3001/api/products/';

export async function getFood() {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
}
export async function getCurrentShop(value) {
    const response = await axios.get(`${BASE_URL}?shop=${value}`);
    return response.data;
}

// export async function updateFoods(id, followers) {
//     const response = await axios.put(`${BASE_URL}/${id}`, {
//         price,
//     })
//     return response.data;
// }
