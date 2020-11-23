import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import CastMovie from "../Actors/CastMovie";
import getCast from "../../hooks/getCast";

import themoviedb from "../../API/themoviedb";

const imgSrc1 = "../spotlight.png";
const ActorDetails = () => {
  getCast();
  const dispatch = useDispatch();

  const [actor, setActor] = useState(null);
  const { person_id } = useParams();

  let name;
  let birthday;
  let place_of_birth;
  let biography;
  let profile_path;
  let movie_credits;
  let cast;

  React.useEffect(() => {
    themoviedb(`person/${person_id}`)
      .then((res) => {
        themoviedb(`person/${person_id}/movie_credits`).then(
          (movie_credits) => {
            // const {credit_id} = movie_credits && movie_credits.cast && movie_credits.cast.map((movie_credits)=>{
            console.log({ ...res, movie_credits });
            setActor({ ...res, credits: movie_credits });
            // dispatch(addActors({ ...res,movie_credits }));
          }
        );
      })
      .catch((err) => console.log(err));
  }, [person_id]);
  name = actor && actor.name;
  birthday = actor && actor.birthday;
  place_of_birth = actor && actor.place_of_birth;
  biography = actor && actor.biography;
  profile_path = actor && actor.profile_path;
  movie_credits = actor && actor.credits;
  cast = movie_credits && movie_credits.cast;
  console.log({ cast });
  return (
    <Wrapper>
      <Container style={{ backgroundImage: `url(${imgSrc1})` }}>
        <p style={{ display: "none" }}></p>

        <MoviePhoto>
          <Img
            src={"//image.tmdb.org/t/p/w220_and_h330_face/" + profile_path}
            alt="profile_path"
          />
          <MovieInfo>
            <SpanName>{name}</SpanName>
            <Span>
              birthday : <InfoValue>{birthday}</InfoValue>
            </Span>
            <Span>
              place_of_birth : <InfoValue>{place_of_birth}</InfoValue>
            </Span>
          </MovieInfo>
        </MoviePhoto>
      </Container>
      <Biography>
        <ActorTitle>Biography</ActorTitle>
        <Span>
          <BiographyDetails>{biography}</BiographyDetails>
        </Span>

        <ActorTitle>Filmography</ActorTitle>
        <Span>
          <CastDetails>
            <CastMovie cast={cast} />
          </CastDetails>
        </Span>
      </Biography>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-between;

  height: 400px;
  background-color: gray;
`;

const Container = styled.div`
  height: 450px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const MoviePhoto = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  margin-left: 250px;
  width: 50%;
  height: 450px;
`;

const MovieInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: none;
  align-items: center;
  color: white;
  margin-top: 150px;
  font-family: "Montserrat", sans-serif;
  width: 500px;
  height: 450px;
`;

const InfoValue = styled.span`
  font-weight: bold;
  margin-left: 5px;
  text-align: left;
`;

const Biography = styled.div`
  font-size: 14px;
  margin-left: 25px;
`;

const CastDetails = styled.div`
  margin-top: 3%;
  margin-left: 2%;
`;

const ActorTitle = styled.div`
  font-weight: bold;
  font-family: sans-serif, Arial, Helvetica, sans-serif;
  font-size: 25px;
  font-weight: 400;
  display: inline-block;
  border-bottom: 3px solid #039be5;
  padding-bottom: 10px;

  margin-bottom: -3px;
  margin-top: 30px;
`;

const BiographyDetails = styled.div`
  font-size: 14px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  margin-top: 30px;
  margin-right: 25%;
`;

const Img = styled.img`
  border-radius: 10%;
  margin-bottom: 50px;
  width: 300px;
  height: 300px;
  border-style: ridge;
`;

const Span = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SpanName = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 40px;
  font-family: "Times New Roman", Times, serif;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

export default ActorDetails;
