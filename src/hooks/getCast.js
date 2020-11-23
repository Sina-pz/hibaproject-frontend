import {useEffect} from "react";
import themoviedb from "../API/themoviedb";
import {useSelector,useDispatch} from "react-redux";
import {addCast} from "../components/action";

const useCast = ()=> {
    const dispatch = useDispatch()
    useEffect (()=> {
themoviedb('person/{person_id}/movie_credits')
.then(data=>{
   
dispatch(addCast(data))
})
    
    },[])
    return useSelector((state) => {
        return state.actors.Cast;
      });
}

export default useCast;