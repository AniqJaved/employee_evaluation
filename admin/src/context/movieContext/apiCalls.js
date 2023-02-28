import axios from "axios";
import { 
    getMoviesFailure, 
    getMoviesStart, 
    getMoviesSuccess,
    createMovieStart, 
    createMovieSuccess, 
    createMovieFailure, 
    deleteMovieStart, 
    deleteMovieSuccess, 
    deleteMovieFailure
} from "./MovieActions";

//GET ALL MOVIES

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());

    try{
        const res = await axios.get("/courses", {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,  //Here we are fetching jwt token from the local storage that we have stored in case of the AuthContext
            },
        });

        //console.log(localStorage.getItem("user"));
        dispatch(getMoviesSuccess(res.data));
    }
    catch(err){
        dispatch(getMoviesFailure());
    }
}

//CREATE MOVIE

export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart());

    try{
        const res = await axios.post("/courses", movie, {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,  //Here we are fetching jwt token from the local storage that we have stored in case of the AuthContext
            },
        });

        console.log(res.data);
        dispatch(createMovieSuccess(res.data));
    }
    catch(err){
        dispatch(createMovieFailure());
    }
}


//Update MOVIE

// export const updateMovie = async (movie, dispatch) => {
//     dispatch(updateMovieStart());

//     try{
//         const res = await axios.post("/courses", movie, {
//             headers: { 
//                 token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,  //Here we are fetching jwt token from the local storage that we have stored in case of the AuthContext
//             },
//         });

//         //console.log(localStorage.getItem("user"));
//         dispatch(createMovieSuccess(res.data));
//     }
//     catch(err){
//         dispatch(createMovieFailure());
//     }
// }



//DELETE MOVIE

export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart());

    try{
        await axios.delete("/courses/" + id, {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,  //Here we are fetching jwt token from the local storage that we have stored in case of the AuthContext
            },
        });

        //console.log(localStorage.getItem("user"));
        dispatch(deleteMovieSuccess(id));
    }
    catch(err){
        dispatch(deleteMovieFailure());
    }
}
