import style from "./MyPosts.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React from "react";
import {FormControlCreator} from "../../common/FormsControls/FormsControl";

const maxLength10 = maxLengthCreator(10),
    Textarea = FormControlCreator('textarea')

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.form}>
            <Field component={Textarea} name='newPostBody'
                   validate={[required, maxLength10,]}
                   className={style.input}/>
            <div className={style.button__wrapper}>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({form: 'addNewPost'})(AddNewPostForm)

export default AddNewPostReduxForm