import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getMoviesInTheatres } from "../action";
import themoviedb from "../../API/themoviedb";

const MoviesInTheatres = (({title,id})=>{
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <h2>Movies In Theatres</h2>
            <ul>
                <li >
            <Link to={`/movie/${id}`}>{title}</Link>
            </li>
            </ul>
        </Wrapper>
    )
});

const Wrapper = styled.div`
display: flex;
flex-direction: row;

`;


export default MoviesInTheatres;