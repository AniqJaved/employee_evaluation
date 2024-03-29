//GET RESEARCH
export const getResearchsStart = () =>({
    type: "GET_RESEARCHS_START"
});


export const getResearchsSuccess = (researchs) =>({
    type: "GET_RESEARCHS_SUCCESS",
    payload: researchs,
});


export const getResearchsFailure = () =>({
    type: "GET_RESEARCHS_FAILURE"
});


//CREATE RESEARCH
export const createResearchStart = () =>({
    type: "CREATE_RESEARCH_START"
});


export const createResearchSuccess = (research) =>({
    type: "CREATE_RESEARCH_SUCCESS",
    payload: research,
});


export const createResearchFailure = () =>({
    type: "CREATE_RESEARCH_FAILURE"
});


//DELETE RESEARCH

export const deleteResearchStart = () =>({
    type: "DELETE_RESEARCH_START"
});


export const deleteResearchSuccess = (id) =>({
    type: "DELETE_RESEARCH_SUCCESS",
    payload: id,
});


export const deleteResearchFailure = () =>({
    type: "DELETE_RESEARCH_FAILURE"
});


