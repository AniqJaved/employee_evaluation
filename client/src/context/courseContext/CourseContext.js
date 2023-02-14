import CourseReducer from "./CourseReducer";
import { createContext, useReducer, React, useEffect } from "react";


const INITIAL_STATE = {
    courses: [],  
    isFetching: false,
    error: false
};


export const CourseContext = createContext(INITIAL_STATE);

export const CourseContextProvider = ({ children }) => {
    const [state, dispatch2] = useReducer(CourseReducer, INITIAL_STATE); //useReducer is used to store the state of the user. The AuthReducer is the function which will check the state, INITIAL_STATE is used to store the user initial state. The result is store in "state"
                                                                      //dispatch is bascially a function just like in case of useState, this function allows us to update the state variable.
    
    return ( 
    <CourseContext.Provider
        value={{
            courses: state.courses,
            isFetching: state.isFetching,
            error: state.error,
            dispatch2
        }}
    >
        {children}
    
    </CourseContext.Provider>
    );
}
