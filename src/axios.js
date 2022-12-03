import axios from "axios";

export const makeRequest = axios.create({
    baseURL: "https://ecommerce.webaza.eu/public/api/",
    withCredentials: true,
});