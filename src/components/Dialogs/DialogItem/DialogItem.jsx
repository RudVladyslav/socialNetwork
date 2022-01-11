import React from 'react';
import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink className={style.dialogItem} activeClassName ={style.active} to={path}>{props.name}</NavLink>
        </div>);
}


export default DialogItem;