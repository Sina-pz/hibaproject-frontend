import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const List = ({movies=[]})=>{
    return <div style={{flex:1}}>
{movies.map(movie=><ListItem key={movie.id} {...movie}/>)}
    </div>
}


export default List;