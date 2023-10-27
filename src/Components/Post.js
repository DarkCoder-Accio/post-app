import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { post_fetch_error, post_fetch_success,post_fetching } from "../redux/actions/postActions";


const Post = () => {

    const {loading, data, error} = useSelector(state => state);

    console.log("loading",loading);
    console.log("data",data);
    console.log("error",error);

const dispatch = useDispatch();
   
useEffect(()=>{
    console.log("useEffect called");
    fetchPost();
},[])


async function fetchPost(){
    try{
        dispatch(post_fetching());
        const response = await axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        dispatch(post_fetch_success(response.data))
    }
    catch(error){
        dispatch(post_fetch_error(error.message))
    }
}

    return(
        <div>
                {
                    data && data.map(item =>
                        <div key={item.id}>
                            <h1>{item.title}</h1>
                            <p>{item.body}</p>
                            <hr />
                        </div>
                    )   
                }
        </div>
    )

}

export default Post;