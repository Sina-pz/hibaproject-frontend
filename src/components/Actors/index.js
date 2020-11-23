import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { addActors } from "../action";
import themoviedb from "../../API/themoviedb";
import LoadingIcon from "../loadingIcons";

import getActorsList from "../../hooks/getActorsList";
import ActorPage from "./ActorPage";



const Actors = () => {
  
  // const [actor, setActor] = useState(null);
  //   const { person_id } = useParams();
const {page=1} = useParams();
const actorsList = getActorsList (page);
console.log({actorsList});
    return (
      <>
       
        <Wrapper>
          <ActorPage 
          actorList = {actorsList}
          />
        </Wrapper>
        </>
            );
            }

const Wrapper = styled.div`
  display: flex;
  justify-items: space-evenly;
  background-color: white;
`;

export default Actors;