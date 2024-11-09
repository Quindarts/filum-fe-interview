import { API_URL } from "@/constants/other";
import axios from "axios";

const client = axios.create({
    baseURL: `${API_URL}`,
    headers: {
        'Content-Type': 'application/json',
    },
});
client.interceptors.response.use(
    (response: any) => {
        return response.data;
    },
    async (error) => {
        return Promise.reject(error.response.data);
    },
);
export default client;