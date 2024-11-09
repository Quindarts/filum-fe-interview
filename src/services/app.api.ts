import { ResponseType } from "@/types/Axios.type"
import client from "./axios"
import { API_URL } from "@/constants/other"

export const sendToEmail = async (email: string, level: number | string): Promise<ResponseType> => {
    return await client.post(`${API_URL}/send-mail`, {
        email,
        level
    })
}
