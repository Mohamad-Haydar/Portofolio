import { ReactNode, createContext, useContext, useState } from 'react'

type ThemeContextType = {
    SelectColorTheme: (themeName: string) => void;
    theme: string
  };

const ThemeContext = createContext<ThemeContextType>({SelectColorTheme: () => {},theme: "blue"})

export const useSelectTheme = () => useContext(ThemeContext);
export function ThemeContextProvider({ children }:  {children:ReactNode}) {

    const [theme, setTheme] = useState("blue")

    const SelectColorTheme = (themeName: string) => {
        setTheme(themeName)
    }

    const contextValue = {
        SelectColorTheme,
        theme
    }

    return (
        <ThemeContext.Provider value={contextValue} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider