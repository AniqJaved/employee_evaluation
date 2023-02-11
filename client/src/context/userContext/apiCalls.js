import axios from "axios";
import { 
    createUserStart, 
    createUserSuccess, 
    createUserFailure, 
} from "./UserActions";

//GET ALL MOVIES

// export const getMovies = async (dispatch) => {
//     dispatch(getMoviesStart());

//     try{
//         const res = await axios.get("/courses", {
//             headers: { 
//                 token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,  //Here we are fetching jwt token from the local storage that we have stored in case of the AuthContext
//             },
//         });

//         //console.log(localStorage.getItem("user"));
//         dispatch(getMoviesSuccess(res.data));
//     }
//     catch(err){
//         dispatch(getMoviesFailure());
//     }
// }

//CREATE MOVIE

export const createUser = async (user, dispatch) => {
    dispatch(createUserStart());

    try{
        const res = await axios.post("/auth/register", user);

        //console.log(localStorage.getItem("user"));
        dispatch(createUserSuccess(res.data));
    }
    catch(err){
        dispatch(createUserFailure());
    }
}



//DELETE MOVIE

// export const deleteMovie = async (id, dispatch) => {
//     dispatch(deleteMovieStart());

//     try{
//         await axios.delete("/courses/" + id, {
//             headers: { 
//                 token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,  //Here we are fetching jwt token from the local storage that we have stored in case of the AuthContext
//             },
//         });

//         //console.log(localStorage.getItem("user"));
//         dispatch(deleteMovieSuccess(id));
//     }
//     catch(err){
//         dispatch(deleteMovieFailure());
//     }
// }
