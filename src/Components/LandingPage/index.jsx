import { LandingContainer, Overlay, MainText, FixedSignature } from './styles';

export default function Landing({ backgroundImage, text }) {
  return (
    <LandingContainer backgroundImage={backgroundImage}>
      <Overlay>
        <MainText>{text}</MainText>
        <FixedSignature>Equalizaminas</FixedSignature>
      </Overlay>
    </LandingContainer>
  );
}