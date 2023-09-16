import { useState, createContext } from 'react'

export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [preference, setPreference] = useState(null);

    return (
        <DataContext.Provider
            value={
                { preference, setPreference }
            }
        >
            {children}

        </DataContext.Provider>
    )
}

export default DataProvider;
