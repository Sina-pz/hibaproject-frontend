import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import MovieLogo from "../Header/MovieLogo";
import Genre from "../Genre";
import { search } from "react-icons-kit/icomoon/search";
import { Icon } from "react-icons-kit";
import { useAuth0 } from "@auth0/auth0-react";
import {happy} from 'react-icons-kit/icomoon/happy'
const logo = require("../assets/movielogocopy.png");

const NavBar = () => {
  const [searchString, setSearchString] = useState("");
  const { loginWithRedirect,user,isAuthenticated,logout } = useAuth0();
  console.log ({user,isAuthenticated});
  return (
   
    <Wrapper>
      <MovieLogo imgSrc={logo} />
      {isAuthenticated ?<NavBarItem onClick={() => logout()}>Logout</NavBarItem>:<NavBarItem onClick={() => loginWithRedirect()}>Login</NavBarItem>}
      <NavBarItem to={"/Actors"}>Actors</NavBarItem>
      <Genre />
      <div>
        <Input 
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          type="text"
          name="content"
          placeholder="search movie "
        ></Input>
        <Icon
          onClick={() => (window.location.href = `/search/${searchString}`)}
          icon={search}
        />
      </div>
      {isAuthenticated && <Welcome>
        
        Welcome {user.nickname}
        <Icon style={{color:"yellow"}} icon={happy} />
      </Welcome>}
      
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: space-evenly;
`;

const Welcome = styled.div`
margin-left:10%;
font-size:25px;
color:lightgray;
`;
const Input = styled.input`
  width: 100px;
  height: 30px;
  padding: 0 12px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  align-content: center;
`;
const NavBarItem = styled(Link)`
  background-color: rgb(150, 150, 150);
  padding: 5px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 1em;
  color: white;
  transition: background-color 1s;
  margin-right:7em;
  text-decoration:none;

`;

export default NavBar;
