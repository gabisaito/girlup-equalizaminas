// src/pages/Home/HomeStyles.js
import { styled } from '@mui/system';

export const ContentContainer = styled('div')(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '40px 20px',
  marginBottom: '40px', 

  [theme.breakpoints.down('md')]: {
    padding: '20px 10px',
    marginBottom: '20px',
  },
}));

export const ImagesContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '30px',
  marginBottom: '30px',
  flexWrap: 'wrap',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    marginTop: '20px',
    marginBottom: '20px',
  },
}));

export const StyledImage = styled('img')(({ theme }) => ({
  borderRadius: '20px',
  maxWidth: '100%',
  height: 'auto',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  objectFit: 'cover',

  [theme.breakpoints.up('md')]: {
    width: '49%',
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));
