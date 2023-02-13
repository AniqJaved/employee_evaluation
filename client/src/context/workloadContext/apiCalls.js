import axios from "axios";
import { 
    getWorkloadFailure, 
    getWorkloadStart, 
    getWorkloadSuccess,
    createWorkloadFailure, 
    createWorkloadStart, 
    createWorkloadSuccess, 
    deleteWorkloadStart, 
    deleteWorkloadSuccess, 
    deleteWorkloadFailure
} from "./WorkloadActions";

//GET WORKLOAD BY USER ID
export const getWorkload = async (dispatch) => {
    dispatch(getWorkloadStart());

    try{
        const owner = JSON.parse(localStorage.getItem("user"))._id;
        const res = await axios.get(`/workload/find/${owner}`, {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,  //Here we are fetching jwt token from the local storage that we have stored in case of the AuthContext
            },
        });
        dispatch(getWorkloadSuccess(res.data));
    }
    catch(err){
        dispatch(getWorkloadFailure());
    }
}

//CREATE WORKLOAD

export const createWorkload = async (workload, dispatch) => {
    dispatch(createWorkloadStart());

    try{
        const res = await axios.post("/workload", workload, {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,  //Here we are fetching jwt token from the local storage that we have stored in case of the AuthContext
            },
        });

        //console.log(localStorage.getItem("user"));
        dispatch(createWorkloadSuccess(res.data));
    }
    catch(err){
        dispatch(createWorkloadFailure());
    }
}


//DELETE USER

export const deleteWorkload = async (id, dispatch) => {
    dispatch(deleteWorkloadStart());

    try{
        await axios.delete("/Workloads/" + id, {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,  //Here we are fetching jwt token from the local storage that we have stored in case of the AuthContext
            },
        });

        //console.log(localStorage.getItem("user"));
        dispatch(deleteWorkloadSuccess(id));
    }
    catch(err){
        dispatch(deleteWorkloadFailure());
    }
}
