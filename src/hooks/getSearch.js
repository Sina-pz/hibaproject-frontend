import { useEffect } from "react";
import themoviedb from "../API/themoviedb";
import { useSelector, useDispatch } from "react-redux";
import { addSearch } from "../components/action";

const useSearch = (query,page) => {
  const dispatch = useDispatch();
  useEffect(() => {
    themoviedb(`search/multi?query=${query}&page=${page}`).then((data) => {
      dispatch(addSearch(data));
    });
  }, [query,page]);
  return useSelector((state) => {
    return state.actors.Search;
  });
};

export default useSearch;
