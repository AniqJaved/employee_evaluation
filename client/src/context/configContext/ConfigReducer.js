const ConfigReducer = (state, action) => {
    
    switch (action.type) {
        case "GET_CONFIG_START":
            return {
                config: [],
                isFetching: true,
                error: false
            };
        case "GET_CONFIG_SUCCESS":
            return {
                config: action.payload,
                isFetching: false,
                error: false
            };
        case "GET_CONFIG_FAILURE":
            return {
                config: [],
                isFetching: false,
                error: true
            };
        
        default:
            return {...state};
    }
}
//console.log(action)

export default ConfigReducer;