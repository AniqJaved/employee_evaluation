import axios from "axios";
import { 
    getUsersFailure, 
    getUsersStart, 
    getUsersSuccess,
    updateUserFailure, 
    updateUserStart, 
    updateUserSuccess,
    deleteUserStart, 
    deleteUserSuccess, 
    deleteUserFailure
} from "./UserActions";

//GET USERS

export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());

    try{
        const res = await axios.get("/users", {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,  //Here we are fetching jwt token from the local storage that we have stored in case of the AuthContext
            },
        });

        //console.log(localStorage.getItem("user"));
        dispatch(getUsersSuccess(res.data));
    }
    catch(err){
        dispatch(getUsersFailure());
    }
}

//UPDATE USER

export const updateUser = async (user, dispatch, userId) => {
    dispatch(updateUserStart());
    try{
        const res = await axios.put(`/users/${userId}`, user, {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,  //Here we are fetching jwt token from the local storage that we have stored in case of the AuthContext
            },
        });

        //console.log(localStorage.getItem("user"));
        dispatch(updateUserSuccess(res.data));
    }
    catch(err){
        dispatch(updateUserFailure());
    }
}


//DELETE USER

export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserStart());

    try{
        await axios.delete("/users/" + id, {
            headers: { 
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,  //Here we are fetching jwt token from the local storage that we have stored in case of the AuthContext
            },
        });

        //console.log(localStorage.getItem("user"));
        dispatch(deleteUserSuccess(id));
    }
    catch(err){
        dispatch(deleteUserFailure());
    }
}
