export interface ArticleProps {
  id: string;
  title: string;
  subtitle: string;
  read?: boolean;
  onRemove: (id: string) => void;
  onToggleRead: (id: string) => void;
}
