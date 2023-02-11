//GET COURSE
export const getCoursesStart = () =>({
    type: "GET_COURSES_START"
});


export const getCoursesSuccess = (courses) =>({
    type: "GET_COURSES_SUCCESS",
    payload: courses,
});


export const getCoursesFailure = () =>({
    type: "GET_COURSES_FAILURE"
});


//CREATE MOVIE
// export const createMovieStart = () =>({
//     type: "CREATE_MOVIE_START"
// });


// export const createMovieSuccess = (movie) =>({
//     type: "CREATE_MOVIE_SUCCESS",
//     payload: movie,
// });


// export const createMovieFailure = () =>({
//     type: "CREATE_MOVIE_FAILURE"
// });


// //DELETE MOVIE

// export const deleteMovieStart = () =>({
//     type: "DELETE_MOVIE_START"
// });


// export const deleteMovieSuccess = (id) =>({
//     type: "DELETE_MOVIE_SUCCESS",
//     payload: id,
// });


// export const deleteMovieFailure = () =>({
//     type: "DELETE_MOVIE_FAILURE"
// });