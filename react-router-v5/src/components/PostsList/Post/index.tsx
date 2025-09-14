import * as S from "./styles";

type PostProps = {
  title: string;
  description: string;
};

export default function Post({ title, description }: PostProps) {
  return (
    <S.Container>
      <h2>{title}</h2>
      <small>{description}</small>
    </S.Container>
  );
}
