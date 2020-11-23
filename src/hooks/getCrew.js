import {useEffect} from "react";
import themoviedb from "../API/themoviedb";
import {useSelector,useDispatch} from "react-redux";
import {addCrew} from "../components/action";

const useCrew = ()=> {
    const dispatch = useDispatch()
    useEffect (()=> {
themoviedb('person/{person_id}/movie_credits')
.then(data=>{
   
dispatch(addCrew(data))
})
    
    },[])
    return useSelector((state) => {
        return state.actors.Crew;
      });
}

export default useCrew;