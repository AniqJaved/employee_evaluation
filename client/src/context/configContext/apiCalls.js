import axios from "axios";
import { 
    getConfigFailure, 
    getConfigStart, 
    getConfigSuccess,
} from "./ConfigActions";

//GET ALL CONFIG

export const getConfig = async (dispatch) => {
    dispatch(getConfigStart());

    try{
        const res = await axios.get("/config", {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,  //Here we are fetching jwt token from the local storage that we have stored in case of the AuthContext
            },
        });
        
        dispatch(getConfigSuccess(res.data));
    }
    catch(err){
        dispatch(getConfigFailure());
    }
}

//CREATE MOVIE

// export const createMovie = async (movie, dispatch) => {
//     dispatch(createMovieStart());

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
