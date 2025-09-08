import { Titleh3, TitleDecoration, Subtitle, ButtonStyled } from './styles';

export default function Title(props) {
  const { title, subtitle, button, buttonHref } = props;

  return (
    <>
      <Titleh3>{title}</Titleh3>
      <TitleDecoration />
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {button && (
        <ButtonStyled onClick={() => window.open(buttonHref, "_blank")}>
          {button}
        </ButtonStyled>
      )}
    </>
  );
}
