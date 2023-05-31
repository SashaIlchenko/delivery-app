import axios from "axios";

const BASE_URL = 'https://64422c0676540ce22585d104.mockapi.io/foods';
const limitPerPage = 10;
export async function getAllUsers() {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
}
export async function getFood(page = 1) {
    const response = await axios.get(`${BASE_URL}?page=${page}&limit=${limitPerPage}`);
    return response.data;
}

// export async function updateFoods(id, followers) {
//     const response = await axios.put(`${BASE_URL}/${id}`, {
//         price,
//     })
//     return response.data;
// }
