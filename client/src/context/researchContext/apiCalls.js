import axios from "axios";
import { 
    getResearchsFailure, 
    getResearchsStart, 
    getResearchsSuccess,
    createResearchFailure, 
    createResearchStart, 
    createResearchSuccess,  
    deleteResearchStart, 
    deleteResearchSuccess, 
    deleteResearchFailure
} from "./ResearchActions";


export const getResearchs = async (dispatch) => {
    dispatch(getResearchsStart());

    try{
        const owner = JSON.parse(localStorage.getItem("user"))._id;
        const res = await axios.get(`/research/find/${owner}`, {
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

export const createResearch = async (research, dispatch) => {
    dispatch(createResearchStart());

    try{
        const res = await axios.post("/research", research, {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,  //Here we are fetching jwt token from the local storage that we have stored in case of the AuthContext
            },
        });

        //console.log(localStorage.getItem("user"));
        dispatch(createResearchSuccess(res.data));
    }
    catch(err){
        dispatch(createResearchFailure());
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
