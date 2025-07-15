import { styled } from '@mui/system';

export const HeaderContainer = styled('div')(({ theme }) => ({
  width: '100%',
  backgroundColor: '#E91E63',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 5rem',
  [theme.breakpoints.down('sm')]: {
    padding: '1rem 2rem',
    flexDirection: 'row',
  },
}));

export const LogoHeader = styled('img')({
  maxWidth: '200px',
  height: 'auto',
});

export const MenuContainer = styled('nav')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const HeaderItem = styled('p')({
  color: '#fff',
  fontFamily: 'Coolvetica, sans-serif',
  fontWeight: 'bold',
  margin: 0,
  fontSize: '1.1rem',
  transition: 'color 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    color: '#60116A',
  },
});

export const MobileMenuIcon = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    fontSize: '2rem',
    color: '#fff',
    cursor: 'pointer',
  },
}));

export const MobileMenu = styled('div')({
  position: 'fixed',
  top: 0,
  right: 0,
  height: '100vh',
  width: '70%',
  backgroundColor: '#E91E63',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  zIndex: 999,
});
