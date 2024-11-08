
import { Components } from '@mui/material/styles';

const components: Components = {
    MuiButton: {
        styleOverrides: {
            root: () => ({
                textTransform: "none",
                outline: 'none',
                '&:focus': {
                    outline: '1px solid currentColor',
                    boxShadow: 'none',
                },
            }),
            contained: () => ({
                color: 'white',
                outline: '0px',
            }),
            sizeSmall: ({ theme }: any) => ({
                fontSize: theme.typography.h5,
                height: 35,
            }),
            sizeMedium: ({ theme }: any) => ({
                fontSize: theme.typography.h5,
            }),
            sizeLarge: ({ theme }: any) => ({
                fontSize: theme.typography.h3,
            }),

        }
    },
    MuiInputBase: {
        styleOverrides: {
            root: ({ theme }: any) => ({
                borderRadius: 8,
                outline: 'none',
                overflow: 'hidden',
                backgroundColor: 'white',
                ' fieldset.MuiOutlinedInput-notchedOutline': {
                    borderWidth: '0.5px',
                },
                '&:hover': {
                    '& fieldset.MuiOutlinedInput-notchedOutline': {
                        borderWidth: '0.5px',
                    },
                },
                '& .MuiSelect-icon ': {
                    color: theme.palette.text.primary,
                },

                '& .MuiSelect-select': {
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                },

                '&.Mui-error': {
                    '& fieldset.MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.error.dark,
                    },
                },
                '&.Mui-disabled input': {
                    '-webkit-text-fill-color': theme.palette.text.primary,
                    backgroundColor: theme.palette.background.defaults,
                    fontWeight: 600,
                    '& .MuiInputBase-input:not(.MuiSelect-select)': {
                        // minHeight: textFieldHeight,
                        backgroundColor: 'rgba(0, 0, 0, 0.02)',
                    },
                    '& .MuiInputBase-input.MuiSelect-select': {
                        backgroundColor: 'rgba(0, 0, 0, 0.02)',
                    },
                    svg: {
                        display: 'none',
                    },
                    'fieldset.MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '& textarea': {
                        border: 'none',
                    },
                },
            }),

            multiline: ({ theme }: any) => ({
                '& textarea': {
                    padding: theme.spacing(4),
                },
            }),
            input: {
                padding: 0,
            },
        },
    },
    MuiCardContent: {
        styleOverrides: {
            root: {
                padding: '24px',
            },
        },
    },
    MuiIconButton: {
        styleOverrides: {
            root: ({ theme }: any) => ({
                color: theme.palette.grey[600],
                '&:focus': {
                    backgroundColor: theme.palette.grey[300]
                }
            })
        }
    }
};

export default components;