import { connect } from 'react-redux'
import { httpRequest } from '../../store/actions/asyncActions';
import LoginForm from '../pure/forms/LoginForm';

const mapStateToProps = (state) => {
    return {
        logged: state.loginState.logged,
        fetching: state.loginState.fetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onLogin: (email, password) => {
            const data = {
                email,
                password
            }

            const url = 'https://reqres.in/api/login'

            dispatch(httpRequest('post', url, data));
        }
    }
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginFormContainer