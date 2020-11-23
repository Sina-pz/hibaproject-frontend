import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import getMoviesInTheatres from "../../hooks/getMoviesInTheatres";
import getBestMovies from "../../hooks/getBestMovies";
import getJustAdded from "../../hooks/getJustAdded";

import MovieList from "../MovieList";


const ListSection = (()=>{


    getMoviesInTheatres();
    getBestMovies();
    getJustAdded();
  const [movies,movies1,movies2] = useSelector((state) => {
    // count=10;
    // defaultCount=10;
    return [state.actors.MoviesInTheatres,state.actors.BestMovies,state.actors.JustAdded];
  });
  console.log (movies);
return (
    <GeneralMoviesList>
        <SmallList >
          <H2 >Movies In Theatres</H2>
<MovieList  movies={movies.results}/>
</SmallList>
<SmallList>
<H2>Top Movies </H2>
<MovieList movies={movies1.results}/>
</SmallList>
<SmallList>
<H2>New Movies</H2>
<MovieList movies={movies2.results}/>
</SmallList>
{/* <MoviesInTheatres /> */}
    </GeneralMoviesList>
)

})

const GeneralMoviesList = styled.div`
display:flex;
flex-direction:row;

`;
const H2 = styled.div`

border-bottom:2px solid blue;
padding-bottom:10px;
width:300px;
color:black;
font-family:sans-serif,'Times New Roman';
font-size:22px;

`;
const SmallList = styled.span`
margin-top:2px;
border-radius: 20px;
box-shadow: 6px 2px 18px 1px rgba(150, 150, 150, 1);
border: 1px solid #ccc;
border-radius: 6px;
padding-left:20px;
padding-right:20px;
margin-left:40px;
width:33.3%;
`;



export default ListSection;