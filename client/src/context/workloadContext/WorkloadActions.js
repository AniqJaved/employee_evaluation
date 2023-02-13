//GET WORKLOAD
export const getWorkloadStart = () =>({
    type: "GET_WORKLOAD_START"
});


export const getWorkloadSuccess = (workload) =>({
    type: "GET_WORKLOAD_SUCCESS",
    payload: [workload],                         //We are different at this place as comapred to when we were fetching all the workloads. Because in that case we already were getting an array but here we were getting an object. The problem with this object was that DataGrid on frontend dont accept object instead it requires an array of objects to parse and display data.
});


export const getWorkloadFailure = () =>({
    type: "GET_WORKLOAD_FAILURE"
});

//CREATE WORKLOAD
export const createWorkloadStart = () =>({
    type: "CREATE_WORKLOAD_START"
});


export const createWorkloadSuccess = (workload) =>({
    type: "CREATE_WORKLOAD_SUCCESS",
    payload: workload,
});


export const createWorkloadFailure = () =>({
    type: "CREATE_WORKLOAD_FAILURE"
});


//DELETE WORKLOAD

export const deleteWorkloadStart = () =>({
    type: "DELETE_WORKLOAD_START"
});


export const deleteWorkloadSuccess = (id) =>({
    type: "DELETE_WORKLOAD_SUCCESS",
    payload: id,
});


export const deleteWorkloadFailure = () =>({
    type: "DELETE_WORKLOAD_FAILURE"
});