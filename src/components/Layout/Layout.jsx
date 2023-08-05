import { Link, NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export default function Layout() {
    return (
        <div className={css.container}>
            <header>
                <nav>
                    <NavLink to='/'>Home Page</NavLink>
                    <NavLink to='/movies'>Movies</NavLink>
                </nav>
            </header>
            <Outlet/>
        </div>
    );
}