const CourseReducer = (state, action) => {
    
    switch (action.type) {
        case "GET_COURSES_START":
            return {
                courses: [],
                isFetching: true,
                error: false
            };
        case "GET_COURSES_SUCCESS":
            return {
                courses: action.payload,
                isFetching: false,
                error: false
            };
        case "GET_COURSES_FAILURE":
            return {
                courses: [],
                isFetching: false,
                error: true
            };
        
        default:
            return {...state};
    }
}
//console.log(action)

export default CourseReducer;