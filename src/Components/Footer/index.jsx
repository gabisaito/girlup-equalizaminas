import { FooterContainer, LogoHeader, ContentWrapper, TextBlock, SocialIcons } from './styles';
import instagramIcon from './assets/instagram.svg';
import linkedinIcon from './assets/linkedin.svg';

export default function Footer() {
  return (
    <FooterContainer>
      <ContentWrapper>
        <LogoHeader src={require('./assets/logo.png')} alt="logo" />
        <TextBlock>
          <p>Entre em contato conosco:</p>
          <a
            href="mailto:girlupequalizaminas@gmail.com"
            target="_blank"
            style={{
              color: '#e91e63',
              textDecoration: 'underline',
              fontWeight: 'normal',
              margin: 0,
            }}
          >
            girlupequalizaminas@gmail.com
          </a>
          <SocialIcons>
            <a href="https://www.instagram.com/equalizaminas/" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/equalizaminas-girl-up/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </SocialIcons>
        </TextBlock>
      </ContentWrapper>
    </FooterContainer>
  );
}
