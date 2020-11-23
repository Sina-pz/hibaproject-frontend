import {useEffect} from "react";
import themoviedb from "../API/themoviedb";
import {useSelector,useDispatch} from "react-redux";
import {addGenre} from "../components/action";

const GetGenre = ()=> {
    const dispatch = useDispatch()
    useEffect (()=> {
themoviedb('genre/movie/list')
.then(data=>{
   
dispatch(addGenre(data))
})
    
    },[])
    return useSelector((state) => {
        return state.actors.Genre;
      });
}

export default GetGenre;