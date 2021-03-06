import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from '../../../Contstants/ActionTypes'
import { CONNECTION_ERROR } from '../../../Contstants/api'
import axiosInstance from '../../../Helper/axiosInstance'

export const getLogin = ({username, password}) => (dispatch) => {
    dispatch({
        type: LOGIN_LOADING,
    })

    axiosInstance()
        .post('/auth/login', {username, password})
        .then((res)=>{
            localStorage.token = res.data.token;
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            })
        })
        .catch((err)=>{
            dispatch({
                type: LOGIN_ERROR,
                payload: err.response? err.response.data :CONNECTION_ERROR
            })
        })
}