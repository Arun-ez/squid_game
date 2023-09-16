import { Poppins } from "next/font/google";
import { extendTheme, defineStyle, defineStyleConfig } from "@chakra-ui/react";

const font = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const fonts = {
    body: font.style.fontFamily
}


const Button = defineStyleConfig({
    variants: {
        solid: defineStyle({
            letterSpacing: 1,
            fontWeight: 400,
        })
    }
})

const theme = extendTheme({
    config,
    fonts,
    components: {
        Button,
    }
});

export { theme }