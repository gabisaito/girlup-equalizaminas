import { styled } from '@mui/system';

export const NotFoundContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  textAlign: 'center',
  padding: '0 20px',
  fontFamily: 'Coolvetica, sans-serif',
  color: '#333',
  backgroundColor: '#f8f9fa',

  [theme.breakpoints.down('sm')]: {
    padding: '0 10px',
  },
}));

export const ErrorCode = styled('h1')(({ theme }) => ({
  fontSize: '120px', 
  margin: '0',
  color: '#E91E63',

  [theme.breakpoints.down('md')]: {
    fontSize: '90px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '60px',
  },
}));

export const PageTitle = styled('h2')(({ theme }) => ({
  fontSize: '36px', 
  marginTop: '10px',
  marginBottom: '20px',

  [theme.breakpoints.down('md')]: {
    fontSize: '28px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
}));

export const Description = styled('p')(({ theme }) => ({
  fontSize: '18px', 
  maxWidth: '600px',
  lineHeight: '1.5',

  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    maxWidth: '80%',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    maxWidth: '90%',
  },
}));

export const HomeLink = styled('a')(({ theme }) => ({
  marginTop: '30px',
  padding: '12px 25px', 
  backgroundColor: '#60116A',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
  fontSize: '16px', 

  '&:hover': {
    backgroundColor: '#FDB5D0',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '10px 20px',
    fontSize: '14px',
    marginTop: '20px',
  },
}));
