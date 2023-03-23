import ConfigReducer from "./ConfigReducer";
import { createContext, useReducer, React, useEffect } from "react";


const INITIAL_STATE = {
    config: [],  
    isFetching: false,
    error: false
};


export const ConfigContext = createContext(INITIAL_STATE);

export const ConfigContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ConfigReducer, INITIAL_STATE); //useReducer is used to store the state of the user. The AuthReducer is the function which will check the state, INITIAL_STATE is used to store the user initial state. The result is store in "state"
                                                                      //dispatch is bascially a function just like in case of useState, this function allows us to update the state variable.
    
    return ( 
    <ConfigContext.Provider
        value={{
            config: state.config,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}
    >
        {children}
    
    </ConfigContext.Provider>
    );
}
