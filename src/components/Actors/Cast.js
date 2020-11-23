import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";


const AllCast = (({cast})=>{
    const dispatch = useDispatch();
    return (
        <Wrapper>
            
            {cast.map(({profile_path,name,character,id})=>{
                return <div><CastActorInfo>
                <Link style={{ textDecorationLine: "none" }}to={`/Actor/${id}`}></Link> 
                          <Img src= {"//image.tmdb.org/t/p/w220_and_h330_face/" + profile_path}/>                     
 <InfoDetails>
 {name}
 <br></br>
 <br></br>
 <Character>
  as {character}
  </Character>
 </InfoDetails>
 </CastActorInfo>
 </div>
            })}
            
            
        </Wrapper>
    )
});

const Wrapper = styled.div`

display: grid;
  grid-template-columns: auto auto auto ;
  width:70%;
`;

const CastActorInfo = styled.div`
display:flex;
flex-direction:row;
margin: 15px 15px 15px 15px;
`;

const InfoDetails = styled.div`
display:flex;
flex-direction:column;
font-weight: 400;
font-size: 14px;
line-height: 14px;
margin: 0px 0px 0px 15px;
`;

const Img = styled.img`
width:50px;

`;

const Character = styled.div`
color: gray;

`;
export default AllCast;