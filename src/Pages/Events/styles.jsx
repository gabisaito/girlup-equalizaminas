import { styled } from '@mui/system';

export const ContentContainer = styled('div')(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  paddingTop: '40px',
  paddingBottom: '40px',
  marginBottom: '40px', 

  [theme.breakpoints.down('md')]: {
    paddingTop: '20px',
    paddingBottom: '20px',
    marginBottom: '20px',
  },
}));

export const NewsPreviewContainer = styled('div')(({ theme }) => ({
  // ...
  padding: '0 20px', // Adiciona o padding apenas onde necessário
  [theme.breakpoints.down('md')]: {
    padding: '0 10px',
  },
}));