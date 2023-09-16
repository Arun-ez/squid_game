import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/configs/theme.config';

const ChakrauiProvider = ({ children }) => {

    return (
        <ChakraProvider theme={theme} > {children} </ChakraProvider>
    )
}

export default ChakrauiProvider;
