import MovieReducer from "./MovieReducer";
import { createContext, useReducer, React, useEffect } from "react";


const INITIAL_STATE = {
    movies: [],  
    isFetching: false,
    error: false
};


export const MovieContext = createContext(INITIAL_STATE);

export const MovieContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE); //useReducer is used to store the state of the user. The AuthReducer is the function which will check the state, INITIAL_STATE is used to store the user initial state. The result is store in "state"
                                                                      //dispatch is bascially a function just like in case of useState, this function allows us to update the state variable.
    
    return ( 
    <MovieContext.Provider
        value={{
            movies: state.movies,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}
    >
        {children}
    
    </MovieContext.Provider>
    );
}
