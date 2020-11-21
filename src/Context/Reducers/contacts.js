import { CONTACT_ERROR, CONTACT_LOADING, CONTACT_SUCCESS, LOGOUT_USER } from "../../Contstants/ActionTypes";
import contactInitialState from "../InitialStates/contactInitialState";


const contacts = (state, {payload, type}) => {
    switch(type) {
        case CONTACT_LOADING:{
            return {
                ...state, 
                contacts: {
                    ...state.contacts,
                    loading: true
                }
            }
        }
        case CONTACT_SUCCESS:{
            return {
                ...state, 
                contacts: {
                    ...state.contacts,
                    loading: false,
                    data: payload
                },
            };
        }
        case CONTACT_ERROR:{
            return {
                ...state, 
                contacts: {
                    ...state.contacts,
                    loading: false,
                    error: payload
                },
            }
        }
        case LOGOUT_USER:{
            return {
                ...state, 
                contactInitialState,
            }
        }
        default:
            return state;
    }
};
export default contacts;