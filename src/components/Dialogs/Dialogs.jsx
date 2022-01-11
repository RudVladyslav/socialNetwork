import React from 'react';
import style from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from './DialogItem/DialogItem';
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    if (!props.isAuth) return <Redirect to={"/login"}/>

    let DialogsElements = props.state.DialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);

    let MessageElements = props.state.MessagesData
        .map(message => <Message message={message.message} key={message.id}/>);

    const OnSubmit = (formData) => {
        props.sendMessageActionCreator(formData.newMessageBody);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {DialogsElements}
            </div>
            <div>
                <div className={style.messages}>
                    {MessageElements}
                </div>
                <AddMessageForm onSubmit={OnSubmit}/>
            </div>
        </div>
    );
}


export default Dialogs;