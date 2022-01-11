import React from 'react';
import {sendMessageActionCreator} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        state: state.DialogPage,
        DialogPage: state.DialogPage,
        messageText: state.DialogPage.MessageText,
    }
}

export default compose(
    connect(mapStateToProps, {sendMessageActionCreator}),
    withAuthRedirect
)(Dialogs)




