import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Pagination from "../Pagination";


import { Link } from "react-router-dom";

import themoviedb from "../../API/themoviedb";

const GenrePage = () => {
  const { genre_id, page = 1 } = useParams();
  const [genre, setGenre] = useState(null);

  
  React.useEffect(() => {
    themoviedb(`discover/movie?with_genres=${genre_id}&page=${page}`).then(
      (res) => {
        console.log({ res });
        setGenre({ ...res });
      }
    );
  }, [genre_id,page]);
  return (
    <Wrapper>
      <Pagination
        pageCount={genre && genre.total_pages}
        page={page}
        section={`genrePage/${genre_id}`}
      />
  
    <GenreGeneralInfo>
      {genre &&
        genre.results &&
        genre.results.map((genre) => {
          return (
            <GenreMovie>
              <Link style={{ textDecorationLine: "none" }} to={`/movie/${genre.id}`}>
                <Img
                  src={"//image.tmdb.org/t/p/w220_and_h330_face/" + genre.poster_path}
                  alt="poster_path"
                />
                <br></br>
                <br></br>
                {genre.title}
              </Link>
            </GenreMovie>
          );
        })}
    </GenreGeneralInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const GenreGeneralInfo = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  width: 100%;
  padding: 5px;
  font-weight: bold;
  font-size: 20px;
  font-family: sans-serif, Arial, Arial, Helvetica, sans-serif;
`;

const Img = styled.img`
  display: block;
  width: 185px;
  height: 278px;
`;

const GenreMovie = styled.div`
width:150px;
`;
export default GenrePage;
