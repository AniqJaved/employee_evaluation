const UserReducer = (state, action) => {
    
    switch (action.type) {
        case "CREATE_USER_START":
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case "CREATE_USER_SUCCESS":
            return {
                users: [...state.users, action.payload],
                isFetching: false,
                error: false
            };
        case "CREATE_USER_FAILURE":
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

export default UserReducer;