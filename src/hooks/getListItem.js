import { useEffect } from "react";
import hibaproject from "../API/hibaProject";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../components/action";

const useItem = (email) => {
  const dispatch = useDispatch();
  useEffect(() => {
    hibaproject("library/" + email).then((data) => {
      dispatch(addItem(data));
    });
  }, []);
  const reloadData=()=>{
    hibaproject("library/" + email).then((data) => {
      dispatch(addItem(data));
    }); 
  }
  const removeItem = (email,movie_id)=>{
    hibaproject("library","delete",{email,movie_id}).then(()=>{
      reloadData()
    })
  }
  
  const listState = useSelector((state) => {
    return state.actors.itemList;
  });
  listState.reloadData = reloadData
  listState.removeItem = removeItem
  return listState
};

export default useItem;
