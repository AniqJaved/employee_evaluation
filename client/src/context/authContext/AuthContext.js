import AuthReducer from "./AuthReducer";
import { createContext, useReducer, React, useEffect } from "react";


const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,  //We are storing the user in the localstorage as a mean of state management
    isFetching: false,
    error: false
};


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE); //useReducer is used to store the state of the user. The AuthReducer is the function which will check the state, INITIAL_STATE is used to store the user initial state. The result is store in "state"
                                                                      //dispatch is bascially a function just like in case of useState, this function allows us to update the state variable.
    useEffect(() =>{
        localStorage.setItem("user", JSON.stringify(state.user));  //Here we are storing user state information, in a dictionary with a key user.
    }, [state.user]);

    return ( 
    <AuthContext.Provider
        value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}
    >
        {children}
    
    </AuthContext.Provider>
    );
}
