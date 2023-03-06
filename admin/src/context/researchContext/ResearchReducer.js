const ResearchReducer = (state, action) => {
    
    switch (action.type) {
        case "GET_RESEARCHS_START":
            return {
                researchs: [],
                isFetching: true,
                error: false
            };
        case "GET_RESEARCHS_SUCCESS":
            return {
                researchs: action.payload,
                isFetching: false,
                error: false
            };
        case "GET_RESEARCHS_FAILURE":
            return {
                researchs: [],
                isFetching: false,
                error: true
            };
        
        case "DELETE_RESEARCH_START":
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case "DELETE_RESEARCH_SUCCESS":
            return {
                researchs: state.researchs.filter((research) => research._id !== action.payload),
                isFetching: false,
                error: false
            };
        case "DELETE_RESEARCH_FAILURE":
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

export default ResearchReducer;