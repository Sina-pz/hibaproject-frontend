import {useEffect} from "react";
import themoviedb from "../API/themoviedb";
import {useDispatch} from "react-redux";
import {getMoviesInTheatres} from "../components/action";

const useMoviesTheartes = ()=> {
    const dispatch = useDispatch()
    useEffect (()=> {
themoviedb('discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22')
.then(data=>{
   
dispatch(getMoviesInTheatres(data))
})
    
    },[])
    return null;
}

export default useMoviesTheartes;