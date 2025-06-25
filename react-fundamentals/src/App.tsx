import { useState } from "react";
import { Article } from "./components/Article";
import { useTheme } from "./hooks/useTheme";

export const App = () => {
  const { toggleTheme, theme } = useTheme();

  const [articles, setArticles] = useState([
    {
      id: "1",
      title: "Post 1",
      subtitle: "Alguma coisa do post 1",
      read: true,
    },
  ]);

  const handleRefresh = () => {
    setArticles((prevArticles) => [
      ...prevArticles,
      {
        id: String(Date.now()),
        title: `Post ${prevArticles.length + 1}`,
        subtitle: `Novo conteúdo ${prevArticles.length + 1}`,
        read: false,
      },
    ]);
  };

  const handleRemovePost = (postId: string) => {
    setArticles((prevArticles) =>
      prevArticles.filter((article) => article.id !== postId)
    );
  };

  const handleToggleRead = (postId: string) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === postId ? { ...article, read: !article.read } : article
      )
    );
  };

  return (
    <>
      <header>
        <h1>JStack Blog</h1>
        <h2>Post da Semana</h2>
        <div data-actions-article>
          <button type="button" onClick={handleRefresh}>
            Atualizar
          </button>
          <button type="button" onClick={toggleTheme}>
            Alternar para {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>
      </header>
      <hr />
      <main>
        {articles.map((article) => (
          <Article
            key={article.id}
            id={article.id}
            title={article.title}
            subtitle={article.subtitle}
            read={article.read}
            onRemove={handleRemovePost}
            onToggleRead={handleToggleRead}
          />
        ))}
      </main>
    </>
  );
};
