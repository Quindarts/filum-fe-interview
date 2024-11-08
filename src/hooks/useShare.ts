import { useSnackbar } from 'notistack';

function useShare() {
    const { enqueueSnackbar } = useSnackbar()
    const onCopyToClipBoard = async (user: string, level: number) => {
        const link = ` https://filum-be-interview.vercel.app` + '/get-link?user=' + user + '&level=' + level;
        await navigator.clipboard.writeText(link);

        enqueueSnackbar("Copied to clipboard", { variant: "success" });
    }
    return {
        onCopyToClipBoard
    }
}

export default useShare