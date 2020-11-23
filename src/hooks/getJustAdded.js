import {useEffect} from "react";
import themoviedb from "../API/themoviedb";
import {useDispatch} from "react-redux";
import {getJustAdded} from "../components/action";

const useJustAdded = ()=> {
    const dispatch = useDispatch()
    useEffect (()=> {
themoviedb('discover/movie?with_genres=18&primary_release_year=2014')
.then(data=>{
   
dispatch(getJustAdded(data))
})
    
    },[])
    return null;
}

export default useJustAdded;