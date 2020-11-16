import React, { createContext, useReducer } from 'react';
import authInitialState from './InitialStates/authInitialState';
import contactInitialState from './InitialStates/contactInitialState';
import auth from './Reducers/auth';
import contacts from './Reducers/contacts';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
    
    const [authState, authDispatch] = useReducer(auth, authInitialState);
    const [contactState, contactDispatch] = useReducer(contacts, contactInitialState);
  
    return (<GlobalContext.Provider value={{
        authState,
        authDispatch,
        contactState,
        contactDispatch,
    }}>
      {children}
    </GlobalContext.Provider>
    )
  }
  

export default GlobalProvider;