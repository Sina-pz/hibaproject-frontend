import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Pagination from "../Pagination";
import { useDispatch, useSelector } from "react-redux";
import { addActors } from "../action";
import themoviedb from "../../API/themoviedb";
import useActorsList from "../../hooks/getActorsList";
import { Link } from "react-router-dom";


const ActorPage = ({ actorList }) => {
  const { page = 1 } = useParams();
  console.log({ actorList });
  return (
    <Wrapper>
      <Pagination
        pageCount={actorList.total_pages}
        page={page}
        section="Actors"
      />

      <ActorGeneralInfo>
        {actorList &&
          actorList.results &&
          actorList.results.map((actor) => {
            return (
              <div>
                <Link
                  style={{ textDecorationLine: "none" }}
                  to={`/Actor/${actor.id}`}
                >
                  <img
                    src={
                      "//image.tmdb.org/t/p/w220_and_h330_face/" +
                      actor.profile_path
                    }
                  />
                  <br></br>
                  <br></br>
                  {actor.name}
                </Link>
              </div>
            );
          })}
      </ActorGeneralInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const ActorGeneralInfo = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;

  margin-top: 150px;
  width: 100%;
  padding: 5px;
  font-weight: bold;
  font-size: 20px;
  font-family: sans-serif, Arial, Arial, Helvetica, sans-serif;
`;

export default ActorPage;
