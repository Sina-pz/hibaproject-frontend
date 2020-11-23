import React from "react";
import styled from "styled-components";

import SectionList from "./sectionList";
import LoadingIcon from "../loadingIcons";
import ListForMovies from "./ListForMovies";
const imgSrc = "./movingstars.gif";
const Show = () => {
    return imgSrc ?(
    <Wrapper>
      
      <Container style = {{backgroundImage:`url(${imgSrc})`}}> 
         
           <SectionList />
<ListForMovies/>

            </Container>
    </Wrapper>
    ): (
      <LoadingIcon size={65} />
    );
}

const Wrapper = styled.div`
  /* flex: 0; */
  width:85%;
  display: flex;
  padding: 0px ;
`;

const Container = styled.div`
 height:450px;
 width:100%;
 background-size:cover;
 background-repeat:no-repeat
 `;

export default Show;