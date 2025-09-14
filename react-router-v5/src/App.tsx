import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";

import { ThemeContext } from "./context/themeContext";

export const App = () => {
  return (
    <ThemeContext>
      <GlobalStyle />
      <Layout />
    </ThemeContext>
  );
};

export default App;
