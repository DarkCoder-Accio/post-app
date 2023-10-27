import { POST_FETCHING, POST_FETCH_SUCCESS,POST_FETCH_ERROR } from "./actionTypes";

// let intialState = {
//     loading: false,
//     data: [],
//     error: null
// }

export const post_fetching = ()=>{
     return{
        type: POST_FETCHING
     }
}

export const post_fetch_success = (data)=>{
    return{
        type: POST_FETCH_SUCCESS,
        payload: data
    }
}   

export const post_fetch_error = (error)=>{
    return{
        type: POST_FETCH_ERROR,
        payload: error
    }
}
