import { styled } from '@mui/system';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  padding: '20px',

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    padding: '40px',
    alignItems: 'flex-start', 
  },
}));

export const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  borderRadius: '20px',
  objectFit: 'cover',
  flex: 1,
  [theme.breakpoints.up('sm')]: {
    flex: '1.5',
    minWidth: '250px',
    alignSelf: 'flex-start',
  },
}));

export const TextWrapper = styled('div')({
  flex: 2.5,
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
});

export const Title = styled('h3')({
  fontFamily: 'Albert Sans, sans-serif',
  fontWeight: 600,
  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
  margin: 0,
  color: '#6A1B9A',
});

export const Highlight = styled('span')({
  color: '#E91E63',
});

export const Subtitle = styled('p')({
  fontFamily: 'Albert Sans, sans-serif',
  fontWeight: 400,
  fontSize: 'clamp(0.85rem, 2vw, 1rem)',
  marginTop: '0.6rem',
  marginBottom: '0.6rem',
  color: '#000000',
  lineHeight: 1.5,
});

export const ButtonStyled = styled('a')({
  backgroundColor: '#800080',
  fontFamily: 'Coolvetica, sans-serif',
  fontSize: '1.1rem',
  borderRadius: '10px',
  border: 'none',
  color: '#FFFFFF',
  padding: '10px 20px',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  alignSelf: 'flex-start',
  '&:hover': {
    backgroundColor: '#FDB5D0',
  },
});
