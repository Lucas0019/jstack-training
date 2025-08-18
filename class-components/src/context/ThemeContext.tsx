import { Component, createContext, type ReactNode } from "react";

export type Theme = "light" | "dark";

interface ThemeContextData {
  theme: Theme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeProviderState {
  theme: Theme;
}

export const ThemeContext = createContext<ThemeContextData | undefined>(
  undefined
);

export class ThemeProvider extends Component<
  ThemeProviderProps,
  ThemeProviderState
> {
  constructor(props: ThemeProviderProps) {
    super(props);
    this.state = {
      theme: "light",
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === "light" ? "dark" : "light",
    }));
  };

  render() {
    const { children } = this.props;
    const { theme } = this.state;

    return (
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <div className={theme}>{children}</div>
      </ThemeContext.Provider>
    );
  }
}
