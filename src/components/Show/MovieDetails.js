import React, { useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import { Link } from "react-router-dom";
import LoadingIcon from "../loadingIcons";
import { useDispatch } from "react-redux";

import themoviedb from "../../API/themoviedb";

import Cast from "../Actors/Cast";
import Crew from "../Actors/Crew";

import hibaproject from "../../API/hibaProject";
import {useAuth0} from "@auth0/auth0-react";
const img1Src = "backdrop_path";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const {isAuthenticated,user}=useAuth0();

  const [movie, setMovie] = useState(null);
  const { movie_id } = useParams();

  let title;
  let language;
  let popularity;
  let poster_path;
  let date;
  let runtime;
  let genre;
  let backdrop_path;
  let actor;
  let overview;
  let video;
  let credits;
  let cast;
  let crew;

  React.useEffect(() => {
    themoviedb(`movie/${movie_id}`)
      .then((res) => {
        themoviedb(`movie/${movie_id}/videos`).then((videos) => {
          themoviedb(`movie/${movie_id}/credits`).then((credits) => {
            const { key = false } =
              (videos &&
                videos.results &&
                videos.results.find((video) => video.site === "YouTube")) ||
              {};
            console.log({ ...res, key, credits });
            setMovie({ ...res, key, credits });
          });
        });
      })

      .catch((err) => console.log(err));
  }, [movie_id]);

  if (movie === null) return null;

  title = movie.title;
  language = movie.original_language;
  popularity = movie.popularity;
  poster_path = movie.poster_path;
  date = movie.release_date;
  backdrop_path = movie.backdrop_path;
  genre = movie.genre;
  runtime = movie.runtime;
  credits = movie.credits;
  cast = credits && credits.cast;
  crew = credits && credits.crew;
 
  
  return movie ? (
    <Wrapper>
      <MovieDetailContainer>
        
        <BackgroundMovie
          style={{
            backgroundImage: `url(${
              "//image.tmdb.org/t/p/original/" + movie.backdrop_path
            })`,
            }}
        >
         
          <MoviePhoto>
            <Img 
              src={"//image.tmdb.org/t/p/w220_and_h330_face/" + poster_path}
              alt="poster_path"
            />         

            <MovieInfo>
              <SpanName>{movie.title}</SpanName>
              <Span>
                Language: <InfoValue>{movie.original_language}</InfoValue>
              </Span>
              <Span>
                popularity: <InfoValue>{movie.popularity}</InfoValue>
              </Span>
              <Span>
                Date: <InfoValue>{movie.release_date}</InfoValue>
              </Span>
              <Span>
                genre:
                <InfoValue>
                  {movie.genres && movie.genres.map((genre) => (
                    <Link
                      style={{ color: "white",textDecorationLine: "none" }}
                      to={`/genrePage/${genre.id}`}
                    >
                     
                      {genre.name}
                    </Link>
                  ))}
                </InfoValue>
              </Span>
              <Span>
                Runtime: <InfoValue>{movie.runtime} minutes</InfoValue>
              </Span>
            </MovieInfo>
          </MoviePhoto>
        </BackgroundMovie>
      </MovieDetailContainer>
      {isAuthenticated && <Button 
            onClick={(ev) => {
              hibaproject ("library","post",{
                email: user.email,
                movie_id: movie_id,
                title:movie.title,
                picture:movie.poster_path,
              })

              // dispatch(addItem({ }));
            }}           
          >
            Add to library
          </Button>}
      <OtherInfo>
        <Title>Overview</Title>
        <SummaryDetails>{movie.overview}</SummaryDetails>

        {movie.key !== false && (
          <Trailer>
            <Title>{movie.title} Trailer</Title>
            <TrailerDetails>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${movie.key}`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </TrailerDetails>
          </Trailer>
        )}
        <div>
          <Title>Cast</Title>
          <CastDetails>
          {/* <Link style={{ textDecorationLine: "none" }}to={`/Actor/${id}`}> */}
            <Cast cast={cast} />
            {/* </Link>  */}
          </CastDetails>
        </div>
        <div>
          <Title>Crew</Title>
          <CrewDetails>
            <Crew crew={crew} />
          </CrewDetails>
        </div>
      </OtherInfo>
    </Wrapper>
  ) : (
    <LoadingIcon />
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  background-color: white;
`;

const OtherInfo = styled.div`
  padding: 25px;
`;

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid gray;
  background-color: gray;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  color: #fafafa;
  margin-left:90%;
  margin-top:1%;
  width: 120px;
  height: 40px;
  align-items: center;
  display: block;
  transition: background-color 0.3s;
`;

const BackgroundMovie = styled.div`
  display: flex;
  flex-direction: row;
  height: 450px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const InfoValue = styled.span`
  font-weight: bold;
  margin-right: 5px;
 
`;

const SummaryDetails = styled.div`
  margin-bottom: 35px;
  margin-right: 600px;
  margin-top: 30px;
`;

const Title = styled.div`
  font-weight: bold;
  font-family: sans-serif, Arial, Helvetica, sans-serif;
  font-size: 25px;
  font-weight: 400;
  display: inline-block;
  border-bottom: 3px solid #039be5;
  padding-bottom: 10px;

  margin-bottom: -3px;
`;
const Img = styled.img`
  border-radius: 10%;
  margin-bottom: 25px;
  width: 300px;
  height: 300px;
`;

const MovieDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: space-around;
  justify-content: space-evenly;
  height: 450px;
  width: 100%;
  margin-top: 30px;
`;
const MoviePhoto = styled.div`
  display: flex;
  margin-left: 20%;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  width: 500px;
`;
const MovieInfo = styled.div`
  align-items: left;

  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: none;

  color: white;
  margin-top: 150px;
  font-family: "Montserrat", sans-serif;
  width: 500px;
  height: 500px;
`;
const Span = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: none;
  width: 400px;
  font-size: 17px;
  margin: 5px;
 
`;

const Trailer = styled.div`
  border-top: 25;
`;

const TrailerDetails = styled.div`
  margin-bottom: 35px;
  margin-top: 30px;
`;

const CastDetails = styled.div`
  margin-top: 30px;
`;
const CrewDetails = styled.div`
  margin-top: 30px;
`;
const SpanName = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 35px;
  font-family: "Times New Roman", Times, serif;
  text-align: left;
  font-family: "Montserrat", sans-serif;
`;

export default MovieDetails;
