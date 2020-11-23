import React from "react";

import styled from "styled-components";
import NavBar from "./NavBar";



const Header = () => {
    return (
        <Wrapper>

            <NavBar />
    </Wrapper>
    )
}

const Wrapper = styled.div`
  /* overflow: hidden; */
  background-color: white;
  position: absolute;
  top: 0px;
  /* margin-left: 160px; */
  height: 10%;
  width:100%
`;


export default Header;