import axios from 'axios';
import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGOUT
 } from '../constants/UserConstants';
import { clearCart, listCartItems } from './cartActions';


export const Signup = (fname, lname, email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });
        const config = { headers: { 'Content-type': 'application/json' } };

        const { data } = await axios.post('http://127.0.0.1:8000/api/users/register/', {
            fname,
            lname,
            email,
            password
        }, config);

       
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

       
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {
       
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && (error.response.data.details || error.response.data.detail)
                ? error.response.data.details || error.response.data.detail
                : error.message,
        });
    }
};

export const Login = (email, password) => async (dispatch) => {
    try {
       
        dispatch({ type: USER_LOGIN_REQUEST });
        const config = { headers: { 'Content-type': 'application/json' } };

        const { data } = await axios.post('http://127.0.0.1:8000/api/users/login/', {
            username: email, 
            password
        }, config);

        
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        dispatch(clearCart());
        dispatch(listCartItems());
        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && (error.response.data.details || error.response.data.detail)
                ? error.response.data.details || error.response.data.detail
                : error.message,
        });
    }
};

export const logout = () => (dispatch) => {
    dispatch(clearCart());
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_LOGOUT });
};
