import UserReducer from "./UserReducer";
import { createContext, useReducer, React, useEffect } from "react";


const INITIAL_STATE = {
    users: [],  
    isFetching: false,
    error: false
};


export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE); //useReducer is used to store the state of the user. The AuthReducer is the function which will check the state, INITIAL_STATE is used to store the user initial state. The result is store in "state"
                                                                      //dispatch is bascially a function just like in case of useState, this function allows us to update the state variable.
    
    return ( 
    <UserContext.Provider
        value={{
            users: state.users,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}
    >
        {children}
    
    </UserContext.Provider>
    );
}
