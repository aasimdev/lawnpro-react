// src/theme.ts
import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
    typography: {
        fontFamily: "Inter", // Default font
    },
    palette: {
        primary: {
            main: '#75A428', // Tailwind's blue-600
        },
        secondary: {
            main: '#f97316', // Tailwind's orange-500
        },
        background: {
            default: '#f8fafc', // Tailwind's gray-50
        },
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#525866', // Apply black color to the Link and its children
                    '& svg': {
                        color: 'inherit', // Ensure SVG icons inherit the color from the Link
                    },
                    textDecoration: 'underline'
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "2px",
                        borderColor: "#75A428AA", // Set your desired hover border color here
                    },
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontColor: '#525866'
                },
                input: {
                    padding: '10px 12px'
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    '&::placeholder': {
                        color: '#99A0AE', // Change placeholder color
                        fontSize: '14px', // Set font size
                    },
                },
            },
        },
        // Override the Checkbox component
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: '#D1D4DA', // Default color for unchecked state if needed,
                    padding: '2px',
                    '&.Mui-checked': {
                        color: "#75A428", // Set the custom success color for the checked state
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "white",        // Green background
                    color: "#525866",                  // White text color
                    fontSize: "14px",                  // Text font size
                    border: "1px solid #E1E4EA",       // Border with dark green color
                    borderRadius: "8px",              // Border radius
                    fontWeight: 500,
                    lineHeight: '20px', /* 142.857% */
                    letterSpacing: '-0.084px',
                    padding: '8px',
                    gap: '4px',
                    "&:hover": {
                        // backgroundColor: "#45A049",      // Darker green on hover
                        // borderColor: "#2E7D32",          // Change border color on hover
                        color: '#0E121B'
                    },
                    '& .MuiButton-startIcon': {
                        margin: 0
                    },
                    '& .MuiButton-endIcon': {
                        margin: 0
                    },
                    textTransform: "none"
                },
            },
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    '& input[type=number]': {
                        MozAppearance: 'textfield', // Firefox
                    },
                    '& input[type=number]::-webkit-outer-spin-button': {
                        WebkitAppearance: 'none', // Chrome, Safari, Edge
                        margin: 0,
                    },
                    '& input[type=number]::-webkit-inner-spin-button': {
                        WebkitAppearance: 'none', // Chrome, Safari, Edge
                        margin: 0,
                    },
                },
            },
        },
        // MuiListItemButton: {
        //     styleOverrides: {
        //         root: {
        //             backgroundColor: "#75A428", // Set background color to green
        //             color: "white", // Set text color to white for the button
        //             justifyContent: "flex-start", // Align content to the left
        //             "&:hover": {
        //                 backgroundColor: "#75A428", // Darker green on hover
        //             },
        //         },
        //     },
        // },
        // MuiListItemIcon: {
        //     styleOverrides: {
        //         root: {
        //             color: "white", // Set icon color to white
        //         },
        //     },
        // },
        // MuiListItemText: {
        //     styleOverrides: {
        //         primary: {
        //             color: "white", // Set primary text color to white
        //         },
        //     },
        // },
    },
};

const theme = createTheme(themeOptions);

export default theme;