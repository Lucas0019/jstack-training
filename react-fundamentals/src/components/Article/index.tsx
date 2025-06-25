import type { ArticleProps } from "../types/article";

export const Article = ({
  id,
  title,
  subtitle,
  read,
  onRemove,
  onToggleRead,
}: ArticleProps) => {
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
          onChange={() => onToggleRead(id)}
        />
        Marcar como lido
      </label>
      <br />
      <button type="button" onClick={() => onRemove(id)}>
        Delete
      </button>
    </article>
  );
};
