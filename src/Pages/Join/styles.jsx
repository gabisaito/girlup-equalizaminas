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

export const WorkshopWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',
  marginBottom: '32px',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  [theme.breakpoints.up('lg')]: {
    justifyContent: 'space-around',
  },
}));

export const TitleContentWrapper = styled('div')(({ theme }) => ({
  maxWidth: '100%',
  textAlign: 'left',

  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

export const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '20px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',

  [theme.breakpoints.up('sm')]: {
    height: '300px',
  },

  [theme.breakpoints.up('md')]: {
    height: '350px',
    maxWidth: '700px',
  },
}));