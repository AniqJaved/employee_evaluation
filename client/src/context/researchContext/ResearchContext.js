import ResearchReducer from "./ResearchReducer";
import { createContext, useReducer, React, useEffect } from "react";


const INITIAL_STATE = {
    researchs: [],  
    isFetching: false,
    error: false
};


export const ResearchContext = createContext(INITIAL_STATE);

export const ResearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ResearchReducer, INITIAL_STATE); //useReducer is used to store the state of the user. The AuthReducer is the function which will check the state, INITIAL_STATE is used to store the user initial state. The result is store in "state"
                                                                      //dispatch is bascially a function just like in case of useState, this function allows us to update the state variable.
    
    return ( 
    <ResearchContext.Provider
        value={{
            researchs: state.researchs,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}
    >
        {children}
    
    </ResearchContext.Provider>
    );
}
