import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#3f51b5', // Custom primary color
        },
        secondary: {
            main: '#f50057', // Custom secondary color
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: {
            fontSize: '2.5rem',
        },
        h2: {
            fontSize: '2rem',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                    textTransform: 'none', // Remove uppercase transformation
                    padding: '10px 20px',
                },
            },
        },
    },
});

export default customTheme;
