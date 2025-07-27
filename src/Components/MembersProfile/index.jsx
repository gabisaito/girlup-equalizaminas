import { Container, RoundImage, TextWrapper, Title, Highlight, Subtitle } from './styles';

export default function MembersProfile(props) {
    const { name, position, photo, description } = props;

  return (
    <Container>
      <RoundImage src={photo} alt={name} />
      <TextWrapper>
        <Title>
          <Highlight>{name}</Highlight>, {position}
        </Title>
        <Subtitle>
            {description}
        </Subtitle>
      </TextWrapper>
    </Container>
  );
}
