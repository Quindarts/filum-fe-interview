import client from "./axios"

const URL = "/api/v1/app"
const p = {
    INDEX: '/',
    GET_LINK: '/get-link',
    SEND_MAIL: '/send-mail',
    SHARE_FACEBOOK: '/share-facebook',
}

export const getShareFacebook = async (email: string, level: number | string) => {
    return client.get(`${URL}/share/facebook`, {})
}
export const sendToEmail = async (email: string, level: number | string) => {
    return client.post(`${URL}/share/facebook`, {})
}
export const getResultLink = async (email: string, level: number | string) => {
    return client.get(`${URL}/share/facebook`, {})
}