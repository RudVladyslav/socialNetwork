import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const LoginAndLogout = (props) => {
    return (
        <div className={style.login__wrapper}>
            {props.isAuth
                ? <div className={style.login__innerWrapper}>
                    <p className={style.login}><span>Login: </span>{props.login}</p>
                    <p className={style.login}><span>Email: </span>{props.email}</p>
                    <button onClick={props.logout} className={style.logout__btn}>Logout</button>
                </div>
                : <NavLink to='/login'>Login</NavLink>}
        </div>
    )
}

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.headerWrapper}>
                <div className={style.header__main__content}>
                    <img className={style.headerImage}
                         src='https://www.iconfinder.com/static/img/favicons/favicon-194x194.png?bf2736d2f8'/>
                    <h3>Social Network</h3>
                </div>
                <LoginAndLogout {...props} />
            </div>
        </header>
    );
}


export default Header;