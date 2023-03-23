//GET CONFIG
export const getConfigStart = () =>({
    type: "GET_CONFIG_START"
});


export const getConfigSuccess = (config) =>({
    type: "GET_CONFIG_SUCCESS",
    payload: config,
});


export const getConfigFailure = () =>({
    type: "GET_CONFIG_FAILURE"
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