import axios from "axios";
import { 
    getResearchsFailure, 
    getResearchsStart, 
    getResearchsSuccess, 
    deleteResearchStart, 
    deleteResearchSuccess, 
    deleteResearchFailure
} from "./ResearchActions";

export const getResearchs = async (dispatch) => {
    dispatch(getResearchsStart());

    try{
        const res = await axios.get("/research", {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,  //Here we are fetching jwt token from the local storage that we have stored in case of the AuthContext
            },
        });
        dispatch(getResearchsSuccess(res.data));
    }
    catch(err){
        dispatch(getResearchsFailure());
    }
}


//DELETE WORKLOAD

// export const deleteWorkload = async (id, dispatch) => {
//     dispatch(deleteWorkloadStart());

//     try{
//         await axios.delete("/Workloads/" + id, {
//             headers: { 
//                 token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,  //Here we are fetching jwt token from the local storage that we have stored in case of the AuthContext
//             },
//         });

//         //console.log(localStorage.getItem("user"));
//         dispatch(deleteWorkloadSuccess(id));
//     }
//     catch(err){
//         dispatch(deleteWorkloadFailure());
//     }
// }
