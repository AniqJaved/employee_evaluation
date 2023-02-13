const WorkloadReducer = (state, action) => {
    
    switch (action.type) {
        case "GET_WORKLOAD_START":
            return {
                workload: [],
                isFetching: true,
                error: false
            };
        case "GET_WORKLOAD_SUCCESS":
            return {
                workload: action.payload,
                isFetching: false,
                error: false
            };
        case "GET_WORKLOAD_FAILURE":
            return {
                workload: [],
                isFetching: false,
                error: true
            };
        
        case "CREATE_WORKLOAD_START":
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case "CREATE_WORKLOAD_SUCCESS":
            return {
                workload: [...state.workload, action.payload],
                isFetching: false,
                error: false
            };
        case "CREATE_WORKLOAD_FAILURE":
            return {
                ...state,
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