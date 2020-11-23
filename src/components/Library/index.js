import React from "react";
import styled from "styled-components";
import getListItem from "../../hooks/getListItem";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const moviepopcorn = require("../assets/moviepopcorn.jpg");
const Library = () => {
  const { isAuthenticated, user } = useAuth0();
  if (!isAuthenticated) return null;
  const library = getListItem(user.email);
  console.log({ library });
  return (
    <Wrapper>
      <Subcontainer>
        <Mylibrary>My Library</Mylibrary>
        <Popcorn src={moviepopcorn} />
      </Subcontainer>
      <Container>
        {library.map((item) => {
          return (
            <div>
             
              <Containerdetail>
                <Link
                  style={{ textDecorationLine: "none" }}
                  to={`/movie/${item.movie}`}
                >

                  {item.title}
                  </Link>
                <Img
                  src={"//image.tmdb.org/t/p/w220_and_h330_face/" + item.picture} 
                />
                <Button onClick={()=>{
                  library.removeItem(user.email,item.movie)
                }}>remove</Button>
                
              </Containerdetail>
              
            </div>
          );
        })}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 15%;
  position: fixed;
  z-index: 1;
  top: 25px;;
  right: 0;
  background-color: white;
  overflow-x: hidden;
  padding-top: 50px;
  align-content: center;
`;

const Subcontainer = styled.div`
  display: flex;
  flex-direction: row;
 
`;

const Mylibrary = styled.div`
  font-family: sans-serif, Arial, Helvetica, sans-serif;
  font-size: 25px;
`;
const Container = styled.div`
margin-left:25px;
padding-top:60px;

`;
const Img = styled.img`
  width: 50px;
  margin-left:10px;
  
`;
const Containerdetail = styled.div`
margin-bottom:30px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around;
width:100%;
padding:35px;
margin-bottom:1%;

`;

const Button = styled.div`
border-radius: 10px;
  border: 1px solid gray;
  background-color: lightgray;
  font-size:10px;
  font-family: "Montserrat", sans-serif;
  width:25%;
margin-left:30%;
align-content:center;
text-align:center;

`;
const Popcorn = styled.img`
  width: 35%;
  margin-left: 30px;
`;
export default Library;
