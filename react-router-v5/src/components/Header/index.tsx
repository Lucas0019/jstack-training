import { useHistory } from "react-router-dom";

import * as S from "./styles";

export default function Header() {
  const history = useHistory();

  function handleNavigation() {
    history.push("/");
  }

  console.log({ history });

  return (
    <S.Container>
      <h1>JStack's Blog</h1>
      <button title="Página Inicial" type="button" onClick={handleNavigation}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#ffff"
          viewBox="0 0 256 256"
        >
          <path d="M240,208H224V136l2.34,2.34A8,8,0,0,0,237.66,127L139.31,28.68a16,16,0,0,0-22.62,0L18.34,127a8,8,0,0,0,11.32,11.31L32,136v72H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM48,120l80-80,80,80v88H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48Zm96,88H112V160h32Z"></path>
        </svg>
      </button>
    </S.Container>
  );
}
