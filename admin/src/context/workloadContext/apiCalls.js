import axios from "axios";
import { 
    getWorkloadsFailure, 
    getWorkloadsStart, 
    getWorkloadsSuccess, 
    deleteWorkloadStart, 
    deleteWorkloadSuccess, 
    deleteWorkloadFailure
} from "./WorkloadActions";

export const getWorkloads = async (dispatch) => {
    dispatch(getWorkloadsStart());

    try{
        const res = await axios.get("/workload", {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,  //Here we are fetching jwt token from the local storage that we have stored in case of the AuthContext
            },
        });
        dispatch(getWorkloadsSuccess(res.data));
    }
    catch(err){
        dispatch(getWorkloadsFailure());
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
