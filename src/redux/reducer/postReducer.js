
import { POST_FETCH_SUCCESS, POST_FETCHING, POST_FETCH_ERROR } from "../actions/actionTypes";


let intialState = {
    loading: false,
    data: [],
    error: null
}

const postReducer = (state = intialState, action) => {
    switch(action.type){
         case POST_FETCHING:  return{...state, loading: true}

         case POST_FETCH_SUCCESS:  return({...state, loading: false, data: action.payload, error: null})

        case POST_FETCH_ERROR:  return({...state, loading: false, data: [], error: action.payload})

        default: return state

    }
}

export default postReducer;