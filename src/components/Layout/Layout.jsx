import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import styled from 'styled-components';
import { Suspense } from 'react';

const StyledNavLink = styled(NavLink)`
    font-size: 20px;
    color: #000;

    &.active {
        background-color: orange;
        padding: 5px 15px;
        border-radius: 4px;
        box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.75);
    }
`

const Header = styled.header`
    padding: 10px 30px;
    border-bottom: 2px solid #000;
    margin-bottom: 20px;
`

export default function Layout() {
    return (
        <div className={css.container}>
            <Header className={css.header}>
                <div className={css.logo}>iMOVIE</div>
                <nav className={css.nav_bar}>
                    <StyledNavLink to='/'>Home Page</StyledNavLink>
                    <StyledNavLink to='/movies'>Movies</StyledNavLink>
                </nav>
            </Header>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>
        </div>
    );
}