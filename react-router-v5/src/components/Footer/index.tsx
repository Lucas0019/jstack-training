import { useContext } from "react";

import * as S from "./styles";

import { ThemeContextAPI } from "../../context/themeContext";

export default function Footer() {
  const { onToggleTheme } = useContext(ThemeContextAPI);

  return (
    <S.Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={onToggleTheme}>
        🌞
      </button>
    </S.Container>
  );
}
