import {useEffect} from "react";
import themoviedb from "../API/themoviedb";
import {useDispatch} from "react-redux";
import {getBestMovies} from "../components/action";

const useTop10 = ()=> {
    const dispatch = useDispatch()
    useEffect (()=> {
themoviedb('discover/movie?primary_release_year=2010&sort_by=vote_average.desc')
.then(data=>{
   
dispatch(getBestMovies(data))
})
    
    },[])
    return null;
}

export default useTop10;