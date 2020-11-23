import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Show from "../Show";
import Footer from "../Footer";
import Library from "../Library";


const HomePage = () => {
    return (
      <GlobalContainer>
   
        <Header />
        <ContentContainer>
          <Show />
         
          <Library />
          <Footer/>
        </ContentContainer>
       
      </GlobalContainer>
    );
  };

  const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
`;

export default HomePage;
