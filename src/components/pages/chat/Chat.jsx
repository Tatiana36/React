import React from "react";
import classes from "../../header/Header.module.css";
import {Link} from "react-router-dom";
function Chat() {
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
export default Chat