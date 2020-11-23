import {useEffect} from "react";
import themoviedb from "../API/themoviedb";
import {useDispatch} from "react-redux";
import {getMostPopularMovie} from "../components/action";

const usePopularMovie = ()=> {
    const dispatch = useDispatch()
    useEffect (()=> {
themoviedb('discover/movie?sort_by=popularity.desc')
.then(data=>{
   console.log(data);
dispatch(getMostPopularMovie(data))
})
    
    },[])
    return null;
}

export default usePopularMovie;