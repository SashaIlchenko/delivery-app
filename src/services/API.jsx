import axios from "axios";

const BASE_URL = 'http://localhost:3001/api/';

export async function getFood() {
    const response = await axios.get(`${BASE_URL}products/`);
    return response.data;
}

export async function addOrder(values) {
    const response = await axios.post(`${BASE_URL}orders/`, { ...values });

    return response.data;
}

