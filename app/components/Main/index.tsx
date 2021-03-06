import * as S from './styles'

export const Main = ({
  title = 'Remix Boilerplate',
  description = 'TypeScript, ReactJS, Remix e Stitches'
}) => (
  <S.Wrapper>
    <S.Logo
      src="img/logo.svg"
      alt="Imagem de um átomo e Remix Boilerplate escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
)
