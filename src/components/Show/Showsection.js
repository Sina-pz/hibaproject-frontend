import React,{useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../action";

import {star} from 'react-icons-kit/ionicons/star'
import { Icon } from "react-icons-kit";

const Showsection = ({ poster_path,title,vote_average,original_language, popularity, release_date ,genres,id,runtime,backdrop_path  }) => {
  const dispatch = useDispatch();
  const [opacity,setOpacity] = useState(0)
console.log(poster_path,title,vote_average,original_language, popularity, release_date ,genres,id,runtime,backdrop_path );
    return  (
      <Wrapper>
        <Container onMouseEnter={()=>setOpacity(0.5)} onMouseLeave={()=>setOpacity(0)}>
        <Link to={`/movie/${id}`}>
      
        <Img src={"//image.tmdb.org/t/p/w220_and_h330_face/"+ poster_path} alt="poster_path" 
        onClick={(ev) => {
              dispatch(addMovie({ title, original_language, popularity, release_date ,genres ,poster_path,runtime,backdrop_path }));
            }}/>
        
        
        <Overlay style = {{opacity}}>
        <Moviename>{title}</Moviename>
        <br/>
        <br/>
        <br/>
        <br/>
        <Rate><Icon icon={star} style={{color:"yellow"}}/> {vote_average}</Rate>
        </Overlay>
       
        </Link>
        </Container>
        </Wrapper>
      ) ;
}

const Wrapper = styled.div`
display: flex;
  flex-direction: row;
 
 height:450px;
 width:100%;
 background-size:cover;
 background-repeat:no-repeat;
 
 `;

const Container = styled.div`
position: relative;
width:100%;
`;


 const Img = styled.img`
display: block;
 width:185px;
height:278px;
 `;

 const Overlay = styled.span`
 position: absolute;
 top: 0px;
 width:185px;
height:278px;
transition:0.5s;
background-color:black;
text-align:center;
 `;


 const Moviename = styled.span`
width:185px;
height:278px;
color:white;
font-size:20px;
 `;

 const Rate = styled.span`
 width:185px;
height:278px;
color:white;
font-size:20px;
align-items:center;
 `;



export default Showsection;