import { styled } from '@mui/system';

export const LandingContainer = styled('section')(({ backgroundImage }) => ({
  background: `linear-gradient(rgba(255, 0, 102, 0.5), rgba(255, 0, 102, 0.5)), url(${backgroundImage}) center center / cover no-repeat`,
  minHeight: '100vh',
  width: '100%',
  position: 'relative',

  '@media (max-width: 768px)': {
    minHeight: '70vh',
  },
}));

export const Overlay = styled('div')({
  position: 'absolute',
  bottom: '3rem',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
  maxWidth: '900px',
  padding: '0 1rem',   

  '@media (max-width: 768px)': {
    bottom: '2rem',
    maxWidth: '95%',
    gap: '0.05rem',
  },
});

export const FixedSignature = styled('p')({
  fontFamily: 'Ashley Southine Demo, cursive',
  color: '#FDB5D0',
  fontSize: 'clamp(3rem, 6vw, 4.5rem)', 
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  zIndex: 2,
  pointerEvents: 'none',
  margin: 0,
});

export const MainText = styled('h1')({
  fontFamily: 'Coolvetica, sans-serif',
  fontSize: 'clamp(1.6rem, 5vw, 3rem)',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  color: '#FFFFFF',
  fontWeight: 700,
  margin: 0,
  letterSpacing: '1px',
  lineHeight: 1,    
  maxWidth: '100%',
  zIndex: 1,
});
