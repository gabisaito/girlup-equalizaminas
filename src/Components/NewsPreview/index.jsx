import React, { useRef, useEffect, useState } from 'react';
import { Container, StyledImage, TextWrapper, Title, Highlight, Subtitle, ButtonStyled } from './styles';

export default function NewsPreview(props) {
  const { title, date, photo, description, button, buttonHref } = props;

  const textRef = useRef(null);
  const [textHeight, setTextHeight] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.offsetHeight);
    }
  }, [title, date, description]);

  return (
    <Container>
      <StyledImage src={photo} alt={title} style={{ height: textHeight }} />
      <TextWrapper ref={textRef}>
        <Title>
          <Highlight>{title}</Highlight>, {date}
        </Title>
        <Subtitle>
          {description}
        </Subtitle>
        {button && (
          <ButtonStyled onClick={() => window.open(buttonHref, "_blank")}>
            {button}
          </ButtonStyled>
        )}
      </TextWrapper>
    </Container>
  );
}
