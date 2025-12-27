import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#f4251b',
        },
        secondary: {
            main: '#ffffffff',
        },
        text: {
            primary: '#000',
            secondary: '#ffffffff',
            disabled: '#aaa',
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: "2.0rem",
                    fontWeight: 500,
                },
                h2: {
                    fontSize: "1.7rem",
                    fontWeight: 450,
                },
                h3: {
                    fontSize: "1.4rem",
                    fontWeight: 450,
                },
                body1: {
                    fontSize: "1rem",
                    lineHeight: 1.6,
                },
                caption: {
                    fontSize: "0.75rem",
                    color: "#888",
                },
            }
        },
    }
});

export const flexCenter = { display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }

export default theme