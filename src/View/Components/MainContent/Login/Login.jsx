import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { login } from './../../../../redux/reducer/auth-reducer'


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} placeholder={'Email'} component={"input"}/>
            </div>
            <div>
                <Field  name={'password'}  placeholder={'Password'} component={"input"}/>
            </div>
            <div>
                <Field  name={'rememberMe'} type={'checkbox'} component={"input"}/> <span>remember me</span>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
const Login = (props) => {
    const onSubmit= (formData) => {props.login(formData.email, formData.password, formData.rememberMe) }
    
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    
    return (
        <div>
            <h3>Login</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)