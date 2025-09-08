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

export const ProfilesWrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr', 
  gap: '40px', 
  marginTop: '40px',

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr 1fr', 
  },
}));