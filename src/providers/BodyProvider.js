import ChakrauiProvider from './ChakrauiProvider';
import DataProvider from './DataProvider';

const Body = ({ children }) => {

    return (
        <ChakrauiProvider>
            <DataProvider>
                {children}
            </DataProvider>
        </ChakrauiProvider>
    )
}

export default Body;
