import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import style from "../Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {FormControlCreator} from "../../common/FormsControls/FormsControl";

const maxLength50 = maxLengthCreator(50),
    Textarea = FormControlCreator('textarea')
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.dialogsForm__wrap}>
            <Field component={Textarea}
                   validate={[required, maxLength50]}
                   name='newMessageBody'

            />
            <button className={style.button}>Send</button>
        </form>
    )
}

export default reduxForm({form: 'dialogAddMessage'})(AddMessageForm)

