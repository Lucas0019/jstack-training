import Header from "../Header";
import Footer from "../Footer";
import Routes from "../../Routes";
import { BrowserRouter, Link } from "react-router-dom";

import * as S from "./styles";

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <S.Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/:id">Post</Link>
      </S.Nav>
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
