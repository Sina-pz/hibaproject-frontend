import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListItem = ({title,id})=>{
return <div>
    
<Link to={`/movie/${id}`} style={{textDecoration:"none",color:"black"}}>{title}</Link>

    </div>
}

export default ListItem;