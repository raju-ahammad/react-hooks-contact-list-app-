import { CONTACT_ERROR, CONTACT_LOADING, CONTACT_SUCCESS } from '../../../Contstants/ActionTypes'
import axiosInstance from "../../../Helper/axiosInstance"

export default (history) => (dispatch) =>  {
    dispatch({
        type: CONTACT_LOADING,

    })
    axiosInstance(history)
        .get("/contacts/")
        .then((res)=>{
            dispatch({
                type: CONTACT_SUCCESS,
                payload: res.data
            })
        })
        .catch((err)=> {
            dispatch({
                type: CONTACT_ERROR,
                payload: err.response? err.response.data :"Could not coonect"
            })
        })
}