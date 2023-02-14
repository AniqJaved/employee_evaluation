import axios from "axios";
import { 
    getCoursesFailure, 
    getCoursesStart, 
    getCoursesSuccess,
} from "./CourseActions";

//GET ALL COURSES

export const getCourses = async (dispatch) => {
    dispatch(getCoursesStart());

    try{
        const res = await axios.get("/courses", {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,  //Here we are fetching jwt token from the local storage that we have stored in case of the AuthContext
            },
        });
        dispatch(getCoursesSuccess(res.data));
    }
    catch(err){
        dispatch(getCoursesFailure());
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
