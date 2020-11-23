import {useEffect} from "react";
import themoviedb from "../API/themoviedb";
import {useSelector,useDispatch} from "react-redux";
import {addMovieCast} from "../components/action";

const useMovieCast = ()=> {
    const dispatch = useDispatch()
    useEffect (()=> {
themoviedb('person/{person_id}/movie_credits')
.then(data=>{
   
dispatch(addMovieCast(data))
})
    
    },[])
    return useSelector((state) => {
        return state.actors.Cast;
      });
}

export default useMovieCast;