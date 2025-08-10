import { Component } from "react";
import type { ArticleProps } from "../types/article";

export class Article extends Component<ArticleProps> {
  handleToggleRead = () => {
    const { id, onToggleRead } = this.props;
    onToggleRead(id);
  };

  handleRemove = () => {
    const { id, onRemove } = this.props;
    onRemove(id);
  };

  render() {
    const { title, subtitle, read } = this.props;

    return (
      <article>
        <strong>
          {title} {read ? "(Lido)" : "(Não lido)"}
        </strong>
        <br />
        <small>{subtitle}</small>
        <br />
        <label>
          <input
            type="checkbox"
            checked={read}
            onChange={this.handleToggleRead}
          />
          Marcar como lido
        </label>
        <br />
        <button type="button" onClick={this.handleRemove}>
          Delete
        </button>
      </article>
    );
  }
}
