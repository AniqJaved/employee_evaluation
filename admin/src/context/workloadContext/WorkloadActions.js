//GET WORKLOAD
export const getWorkloadsStart = () =>({
    type: "GET_WORKLOADS_START"
});


export const getWorkloadsSuccess = (workloads) =>({
    type: "GET_WORKLOADS_SUCCESS",
    payload: workloads,
});


export const getWorkloadsFailure = () =>({
    type: "GET_WORKLOADS_FAILURE"
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