import { styled } from '@mui/system';

export const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  flexWrap: 'wrap',
});

export const RoundImage = styled('img')({
  width: 'clamp(80px, 20vw, 120px)',  
  height: 'clamp(80px, 20vw, 120px)',
  borderRadius: '50%',
  objectFit: 'cover',
  flexShrink: 0,
});

export const TextWrapper = styled('div')({
  flex: 1,
  minWidth: 0,
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
  marginTop: '0.4rem',
  marginBottom: 0,
  color: '#000000',
  lineHeight: 1.5,
});
