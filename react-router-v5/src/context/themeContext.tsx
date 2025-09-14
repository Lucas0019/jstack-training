import { useState, createContext, useMemo } from "react";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import themes from "../styles/themes";

// Tipagem do contexto
interface ThemeContextData {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

// Valor inicial do contexto (para evitar undefined)
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContextAPI = createContext<ThemeContextData>({
  theme: "dark",
  onToggleTheme: () => {},
});

interface ThemeContextProps {
  children: React.ReactNode;
}

export function ThemeContext({ children }: ThemeContextProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const currentTheme: DefaultTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContextAPI.Provider
      value={{
        theme,
        onToggleTheme: handleToggleTheme,
      }}
    >
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContextAPI.Provider>
  );
}
