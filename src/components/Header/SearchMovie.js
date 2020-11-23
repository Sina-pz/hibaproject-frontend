import React,{useState} from "react";
import styled from "styled-components";
import {search} from 'react-icons-kit/icomoon/search'
import { Icon } from "react-icons-kit";
import themoviedb from "../../API/themoviedb";
import useSearch from "../../hooks/getSearch";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SearchMovie = () => {
  const {query,page=1} = useParams();
  const SearchResult = useSearch(query,page)
  const {results=[]} = SearchResult 
  console.log (SearchResult);
    return (
        <Wrapper> 
          <SearchListBar>       
       {results.map(result=>{
         return <div key = {result.id}><Link style={{textDecorationLine:"none"}} to={result.media_type==="movie"?`/movie/${result.id}`:result.media_type==="person"?`/Actor/${result.id}`:`/tv/${result.id}`}>{result.original_title || result.original_name || result.name}</Link></div>
       })}
       </SearchListBar>
        </Wrapper>
    );
}

const Wrapper = styled.div`
display: flex;
  flex-direction: column;
  justify-items: space-between;
  background-color: white;
  margin-left:5%;
  margin-top:5%;

`;

const SearchListBar = styled.div`
margin-bottom:15px;  
height:450px;
font-size:20px;
font-family:sans-serif,Arial, Helvetica, sans-serif;
`;

// const Input = styled.input`
//   width: 100px;
//   height: 30px;
//   padding: 0 12px;
//   border: none;
//   border-radius: 4px;
//   font-size: 12px;
//   align-content: center;
// `;

export default SearchMovie;