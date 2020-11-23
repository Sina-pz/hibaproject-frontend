import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import getPopularMovies from "../../hooks/getPopularMovies";
import ShowSection from "./Showsection";
import LoadingIcon from "../loadingIcons";
import { chevronRight } from "react-icons-kit/fa/chevronRight";
import { chevronLeft } from "react-icons-kit/fa/chevronLeft";
import { Icon } from "react-icons-kit";
import { addMovie } from "../action";
import ListForMovies from "./ListForMovies";

const NumberToShow = 4;

const SectionList = ( poster_path,title,vote_average, Language, popularity, Date ,genre,backdrop_path ) => {
  const dispatch = useDispatch();
  const [currentNumber, setCurrentNumber] = useState(0);
  const popularMovies = getPopularMovies();
  const movies = useSelector((state) => {
    return state.actors.mostPopularMovies;
  });
  console.log({ movies });
  const Gallery =
    movies &&
    movies.results &&
    movies.results.filter((movie, index) => {
      const isShown =
        index >= currentNumber && index < currentNumber + NumberToShow;
      return isShown;
    });

  const hideLeftArrow = currentNumber === 0;
  const hideRightArrow =
    movies && movies.results && currentNumber >= movies.results.length - 4;
  return (
    <MovieGallery>
<IconStyle>
      {!hideLeftArrow && (
        <Icon
          icon={chevronLeft}
          onClick={() => {
            setCurrentNumber((c) => c - 1);
          }}
        />
      )}
      </IconStyle>
      <div style={{ display: "flex", flexDirection: "row" }}>
        
        {movies && movies.results ? (
          Gallery.map((movie) => {
            return (
              <div key={movie.id}>
                <ShowSection {...movie} 
                onClick={(ev) => {
              dispatch(addMovie({ title, Language, popularity, Date ,genre ,poster_path,backdrop_path }));
            }}/>
            
              </div>
            );
          })
        ) : (
          <LoadingIcon size={65} />
        )}
      </div>
      <IconStyle>
      {!hideRightArrow && (
        <Icon
          icon={chevronRight}
          onClick={() => {
            setCurrentNumber((c) => c + 1);
          }}
        />
      )}
      </IconStyle>
    </MovieGallery>
  );
};

const MovieGallery = styled.div`
  margin-top: 100px;
  margin-left: 300px;
  display: flex;
  flex-direction: center;
 align-content:space-between;
 
`;

const IconStyle = styled.button`
width:25px;
height:278px;
`;
export default SectionList;
