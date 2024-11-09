import { API_URL } from '@/constants/other';
import { sendToEmail } from '@/services/app.api';
import { useSnackbar } from 'notistack';

enum RESOURCE_ROUTE {
    SHARE_FACEBOOK = "/share-facebook",
    GET_LINK = "/get-link",
    SEND_EMAIL = "/send-email"
}

function useShare() {
    const { enqueueSnackbar } = useSnackbar();
    const onCopyToClipBoard = async (user: string, level: number) => {
        const link = `${API_URL}` + `${RESOURCE_ROUTE.GET_LINK}?user=` + user + '&level=' + level;
        await navigator.clipboard.writeText(link);
        enqueueSnackbar("Copied to clipboard", { variant: "success" });
    }
    const getLinkShareFacebook = (email: string, level: number) => {
        const link_face =
            `${API_URL}` + `${RESOURCE_ROUTE.SHARE_FACEBOOK}/${email}?level=${level}`;
        return link_face
    }
    const onSendEmail = async (email: string, level: number) => {
        const res = await sendToEmail(email, level)
        enqueueSnackbar(res?.message, { variant: "success" });
    }
    return {
        onCopyToClipBoard,
        getLinkShareFacebook,
        onSendEmail
    }
}
export default useShare