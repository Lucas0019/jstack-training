import React, { Component } from "react";
import { Article } from "./components/Article";
import { ThemeContext } from "./context/ThemeContext";

interface ArticleItem {
  id: string;
  title: string;
  subtitle: string;
  read: boolean;
}

interface AppState {
  articles: ArticleItem[];
}

export class App extends Component<object, AppState> {
  public static readonly contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;

  constructor(props: object) {
    super(props);
    this.state = {
      articles: [
        {
          id: "1",
          title: "Post 1",
          subtitle: "Alguma coisa do post 1",
          read: true,
        },
      ],
    };
  }

  handleRefresh = () => {
    this.setState((prevState) => ({
      articles: [
        ...prevState.articles,
        {
          id: String(Date.now()),
          title: `Post ${prevState.articles.length + 1}`,
          subtitle: `Novo conteúdo ${prevState.articles.length + 1}`,
          read: false,
        },
      ],
    }));
  };

  handleRemovePost = (postId: string) => {
    this.setState((prevState) => ({
      articles: prevState.articles.filter((article) => article.id !== postId),
    }));
  };

  handleToggleRead = (postId: string) => {
    this.setState((prevState) => ({
      articles: prevState.articles.map((article) =>
        article.id === postId ? { ...article, read: !article.read } : article
      ),
    }));
  };

  render() {
    const { toggleTheme, theme } = this.context ?? {};
    const { articles } = this.state;

    return (
      <>
        <header>
          <h1>JStack Blog</h1>
          <h2>Post da Semana</h2>
          <div data-actions-article>
            <button type="button" onClick={this.handleRefresh}>
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
              onRemove={this.handleRemovePost}
              onToggleRead={this.handleToggleRead}
            />
          ))}
        </main>
      </>
    );
  }
}
