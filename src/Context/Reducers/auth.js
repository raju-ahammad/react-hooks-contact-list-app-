import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from "../../Contstants/ActionTypes";

const auth = (state, {payload, type}) => {
    switch(type) {
        case REGISTER_LOADING:
            return {
                ...state,
                auth:{
                    ...state.auth,
                    error: false,
                    loading: true
                },
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                auth:{
                    ...state.auth,
                    data: payload,
                    loading: false
                },
            }
        case REGISTER_ERROR:
            return {
                ...state,
                auth:{
                    ...state.auth,
                    error: payload,
                    loading: false
                },
            }           
        default:
            return state;
    }
};
export default auth;