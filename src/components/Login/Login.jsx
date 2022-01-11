import React from "react";
import {Field, reduxForm} from "redux-form";
import {FormControlCreator} from "../common/FormsControls/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/formControl.module.css"

const maxLength30 = maxLengthCreator(30), Input = FormControlCreator('input')

const LoginFrom = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field validate={[required, maxLength30]} component={Input} name={'email'} placeholder={'Email'}/>
            </div>
            <div>
                <Field validate={[required, maxLength30]} component={Input} name={'password'} placeholder={'Password'}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/>remember me
            </div>
            <div>
                <button>login</button>
            </div>
            {error
                ? <div className={style.form_summary_error}>
                    {error}
                </div>
                : undefined}
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginFrom)


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log()
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth
    })
}

export default connect(mapStateToProps, {login})(Login);