import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import {happy} from 'react-icons-kit/icomoon/happy'
import {sad} from 'react-icons-kit/icomoon/sad'

const LikeMovie = ({ id, liked }) => {
  const [isLiked, setIsLiked] = useState(liked);

  const handleLikeIcon = () => {
    fetch(`/api/movie/${id}/like`, {
      method: "PUT",
      body: JSON.stringify({ like: !isLiked }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => setIsLiked(!isLiked))
      .catch(console.error);
  };
  return (
    <Wrapper>
      <Icon
        onClick={handleLikeIcon}
        icon={isLiked ? happy : sad}
      />
    </Wrapper>
  );
};

export default LikeMovie;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 30px;
  color: yellow;
  size:100%;
`;

