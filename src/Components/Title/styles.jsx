import { styled } from '@mui/system';

export const Titleh3 = styled('h3')({
  fontFamily: 'Coolvetica, sans-serif',
  fontSize: '2rem',
  marginBottom: '10px',
})

export const TitleDecoration = styled('span')({
  content: "''",
  display: 'block',
  width: '100px', 
  height: '2px',
  backgroundColor: '#800080',
  marginBottom: '30px', 
})

export const Subtitle = styled('p')({
  fontFamily: 'Coolvetica, sans-serif',
  fontSize: '1rem',
  marginBottom: '30px',
})

export const ButtonStyled = styled('button')({
  backgroundColor:'#800080',
  fontFamily: 'Coolvetica, sans-serif',
  fontSize: '1.1rem',
  borderRadius: '10px',
  border: 'none',
  color: '#FFFFFF',
  padding: '5px 20px',
})