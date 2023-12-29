import { ReactNode, createContext, useContext, useState } from "react";

type ThemeContextType = {
  switchColorMode: () => void;
  mode: "light" | "dark";
};

export const ThemeContext = createContext<ThemeContextType>({
  switchColorMode: () => {},
  mode: 'dark'
});

export const useSwitchMode = () => useContext(ThemeContext);

export function DarkModeContextProvider({ children }:  {children:ReactNode}) {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const switchColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const contextValue: ThemeContextType = {
    switchColorMode,
    mode,
  };

  return (
    <ThemeContext.Provider value={ contextValue }>
        {children}
    </ThemeContext.Provider>
  );
}