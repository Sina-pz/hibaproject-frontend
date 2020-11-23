import {useEffect} from "react";
import themoviedb from "../API/themoviedb";
import {useSelector,useDispatch} from "react-redux";
import {requestAllActorsInfo} from "../components/action";

const useActorsInfo = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        themoviedb('')
        .then(data=>{
            dispatch(requestAllActorsInfo(data))
})
    
    },[])
    return null;
    }
    export default useActorsInfo;











