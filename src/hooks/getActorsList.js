import {useEffect} from "react";
import themoviedb from "../API/themoviedb";
import {useSelector,useDispatch} from "react-redux";
import {addActors} from "../components/action";


const useActorsList = (page)=> {
    const dispatch = useDispatch()
    useEffect (()=> {
themoviedb(`person/popular/?page=${page}`)
.then(data=>{
   
dispatch(addActors(data))
})
    
    },[page])
    return useSelector((state) => {
        return state.actors.ActorsList;
      });
}

export default useActorsList;