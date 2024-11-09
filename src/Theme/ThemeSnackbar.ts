import CustomVariantSnackbar from "@/components/Snackbar";
import styled from '@emotion/styled'
import { MaterialDesignContent } from 'notistack'
import theme from ".";

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
    '&.notistack-MuiContent-warning': {
        backgroundColor: theme.palette.warning.main,
    },
    '&.notistack-MuiContent-info': {
        backgroundColor: theme.palette.info.main,
    },
    '&.notistack-MuiContent-success': {
        backgroundColor: theme.palette.success.main,
    },
    '&.notistack-MuiContent-error': {
        backgroundColor: theme.palette.error.main,
    },
}))

export const themeSnackbar = {
    customVariant: CustomVariantSnackbar,
    warning: StyledMaterialDesignContent,
    info: StyledMaterialDesignContent,
    success: StyledMaterialDesignContent,
    error: StyledMaterialDesignContent,
}