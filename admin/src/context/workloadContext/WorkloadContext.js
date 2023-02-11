import WorkloadReducer from "./WorkloadReducer";
import { createContext, useReducer, React, useEffect } from "react";


const INITIAL_STATE = {
    workloads: [],  
    isFetching: false,
    error: false
};


export const WorkloadContext = createContext(INITIAL_STATE);

export const WorkloadContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(WorkloadReducer, INITIAL_STATE); //useReducer is used to store the state of the user. The AuthReducer is the function which will check the state, INITIAL_STATE is used to store the user initial state. The result is store in "state"
                                                                      //dispatch is bascially a function just like in case of useState, this function allows us to update the state variable.
    
    return ( 
    <WorkloadContext.Provider
        value={{
            workloads: state.workloads,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}
    >
        {children}
    
    </WorkloadContext.Provider>
    );
}
