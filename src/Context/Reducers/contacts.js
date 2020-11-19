import { CONTACT_ERROR, CONTACT_LOADING, CONTACT_SUCCESS } from "../../Contstants/ActionTypes";

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
        default:
            return state;
    }
};
export default contacts;