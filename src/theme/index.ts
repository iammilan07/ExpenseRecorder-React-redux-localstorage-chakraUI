import { extendTheme } from "@chakra-ui/react";

export const global = {
    'html, body': {
        bg: 'gray.900',
        color: 'gray.100',
    },
}

export const colors = {
    milan: {
        100: "#F7FAFC",
        900: "#1A202C",
    },
}

export const AppTheme = extendTheme({
    styles: {
        global
    },
    colors
})