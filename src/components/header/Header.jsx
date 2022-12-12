import React from 'react';
import classes from './Header.module.css';
import {Link} from "react-router-dom";
import Main from '../pages/main/Main';

{/*export const navigate = [
    {
        id: 1,
        name: 'Главная',
        to: '/'
    },
    {
        id: 2,
        name: 'Профиль',
        to: '/profile'
    },
    {
        id: 3,
        name: 'Чат',
        to:'/chat'
    }
]*/}



{/*} function HeaderNav() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.headerUl}>
                    {navigate.map((link) => (
                        <li className={classes.headerLi}> key={link.id}>
                            <link to={link.to}>
                                {link.name}

                            </link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )

}  */}
    function Header() {
        return(
            <nav className={classes.header}>
                <ul className={classes.headerUl}>
                    <li className={classes.headerLi}>
                        <Link className={classes.headerA} to='/home'>Главная</Link>
                    </li>
                    <li className={classes.headerLi}>
                        <Link className={classes.headerA} to='/profile'>Профиль</Link>
                    </li>
                    <li className={classes.headerLi}>
                        <Link className={classes.headerA} to='/chat'>Чат</Link>
                    </li>
                </ul>
            </nav>
        )

    }





export default Header