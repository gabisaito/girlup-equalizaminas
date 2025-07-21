import { styled } from '@mui/system';

export const FooterContainer = styled('div')({
  width: '100%',
  backgroundColor: '#FDB5D0',
  display: 'flex',
  justifyContent: 'center',
  padding: '2rem 5rem',
  color: '#E91E63',
  fontFamily: 'Coolvetica, sans-serif',
  fontSize: '1.1rem',

  '@media (max-width: 768px)': {
    padding: '2rem',
  },
});

export const ContentWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export const LogoHeader = styled('img')({
  maxWidth: '130px',
  height: 'auto',

  '@media (max-width: 768px)': {
    maxWidth: '90px',
  },
});

export const TextBlock = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  '@media (max-width: 768px)': {
    alignItems: 'center',
  },

  '& p': {
    margin: 0,
    marginBottom: '0.3rem',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    lineHeight: 1.2,
  },

  '& a[href^="mailto"]': {
    margin: 0,
    marginBottom: '0.3rem',
    lineHeight: 1.2,
  },
});

export const SocialIcons = styled('div')({
  display: 'flex',
  gap: '0.5rem',
  marginTop: '0.3rem',
  alignItems: 'center',
  justifyContent: 'flex-start',

  '& img': {
    width: '24px',
    height: '24px',
    display: 'block',
    verticalAlign: 'middle',
  },

  '@media (max-width: 768px)': {
    justifyContent: 'center',
  },
});
