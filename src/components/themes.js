import {theme} from '@chakra-ui/core';



const customTheme = {
    ...theme,
    fonts: {
        heading: "'David Libre', serif",
        body: "'Roboto', sans-serif",
        mono: "'Source Code Pro', monospace",
    },
    colors: {
        ...theme.colors,
        palettes: {
            orange: {
                heading: "#9C4221",
                label: "#FFFAF0",
                countdown: "#ED8936",
                body_dark: "#652B19",
                body_light: "#4A5568",
                background: "#FEEBC8",
            },
            dark: {
                heading: "#9C4221",
                label: "#FFFAF0",
                countdown: "#ED8936",
                body_dark: "#652B19",
                body_light: "#4A5568",
                background: "#000",
            },
            light: {
                heading: "#9C4221",
                label: "#FFFAF0",
                countdown: "#ED8936",
                body_dark: "#652B19",
                body_light: "#4A5568",
                background: "#FFF",
            },
        },
    },
};
export default customTheme;