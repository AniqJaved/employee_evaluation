const WorkloadReducer = (state, action) => {
    
    switch (action.type) {
        case "GET_WORKLOADS_START":
            return {
                workloads: [],
                isFetching: true,
                error: false
            };
        case "GET_WORKLOADS_SUCCESS":
            return {
                workloads: action.payload,
                isFetching: false,
                error: false
            };
        case "GET_WORKLOADS_FAILURE":
            return {
                workloads: [],
                isFetching: false,
                error: true
            };
        
        case "DELETE_WORKLOAD_START":
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case "DELETE_WORKLOAD_SUCCESS":
            return {
                workloads: state.workloads.filter((workload) => workload._id !== action.payload),
                isFetching: false,
                error: false
            };
        case "DELETE_WORKLOAD_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            };
        
        default:
            return {...state};
    }
}
//console.log(action)

export default WorkloadReducer;