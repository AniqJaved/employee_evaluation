import axios from "axios";
import { 
    getWorkloadFailure, 
    getWorkloadStart, 
    getWorkloadSuccess, 
    deleteWorkloadStart, 
    deleteWorkloadSuccess, 
    deleteWorkloadFailure
} from "./WorkloadActions";

export const getWorkload = async (dispatch) => {
    dispatch(getWorkloadStart());

    try{
        const owner = JSON.parse(localStorage.getItem("user"))._id;
        console.log(owner)
        const res = await axios.get(`/workload/find/${owner}`, {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,  //Here we are fetching jwt token from the local storage that we have stored in case of the AuthContext
            },
        });
        console.log(res.data)
        dispatch(getWorkloadSuccess(res.data));
    }
    catch(err){
        dispatch(getWorkloadFailure());
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
