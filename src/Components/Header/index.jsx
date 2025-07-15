import { useState } from 'react';
import {
    HeaderContainer,
    MenuContainer,
    HeaderItem,
    LogoHeader,
    MobileMenuIcon,
    MobileMenu,
} from './styles';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const menuItems = [
        { label: 'Início', to: '/' },
        { label: 'Sobre Nós', to: '/sobre-nos' },
        { label: 'Eventos', to: '/eventos' },
        { label: 'Participe', to: '/participe' },
        { label: 'Contato', to: '/contato' },
    ];

    return (
        <>
            <HeaderContainer>
                <LogoHeader src={require('./assets/logo.png')} alt="Logo" />
                <MenuContainer>
                    {menuItems.map(({ label, to }) => {
                        const isActive = location.pathname === to;
                        return (
                            <Link
                                key={to}
                                to={to}
                                style={{
                                    textDecoration: 'none',
                                    pointerEvents: isActive ? 'none' : 'auto',
                                }}
                            >
                                <HeaderItem
                                    sx={{
                                        color: isActive ? '#fff' : '#FDB5D0',
                                    }}
                                >
                                    {label}
                                </HeaderItem>
                            </Link>
                        );
                    })}
                </MenuContainer>

                <MobileMenuIcon onClick={() => setOpen(true)}>☰</MobileMenuIcon>
            </HeaderContainer>

            {open && (
                <MobileMenu>
                    <div
                        style={{
                            alignSelf: 'flex-end',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            color: '#fff', // branco
                        }}
                        onClick={() => setOpen(false)}
                    >
                        ✕
                    </div>
                    {menuItems.map(({ label, to }) => {
                        const isActive = location.pathname === to;
                        return (
                            <Link
                                key={to}
                                to={to}
                                onClick={() => setOpen(false)}
                                style={{
                                    textDecoration: 'none',
                                    pointerEvents: isActive ? 'none' : 'auto',
                                }}
                            >
                                <HeaderItem
                                    sx={{
                                        color: isActive ? '#fff' : '#FDB5D0',
                                    }}
                                >
                                    {label}
                                </HeaderItem>
                            </Link>
                        );
                    })}
                </MobileMenu>
            )}
        </>
    );
}
