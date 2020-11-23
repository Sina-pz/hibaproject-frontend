import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MoviesLogo = ({ imgSrc }) => {
  return (
    <Link to={"/"}>
      <Image src={imgSrc} />
    </Link>
  );
};

const Image = styled.img`
  width: 80px;
  margin-left: 0px;
  margin-right:9em;
`;

export default MoviesLogo;
