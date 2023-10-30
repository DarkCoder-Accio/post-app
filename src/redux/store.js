import {createStore, applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk';
import postReducer from './reducer/postReducer';


const store = createStore(postReducer, applyMiddleware(thunk));

export default store;



// dispatch(fetchPost())
//  function () {
      
//     try{
//         dispatch(post_fetching());  // loading
//         const response = await axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
//         dispatch(post_fetch_success(response.data)) // data
//     }
//     catch(error){
//         dispatch(post_fetch_error(error.message)) // error
//     }
//     }
