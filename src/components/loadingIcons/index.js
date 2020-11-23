import React from "react";

import styled from "styled-components";
import { keyframes } from "styled-components";

const LoadingIcon = (props) => {
  return (
    <Container>
      <RotatingImage
        src={require(`../assets/loading.gif`)}
        style={{ width: `${props.size}px`, height: `${props.size}px` }}
      />
    </Container>
  );
};

const RotatingAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const RotatingImage = styled.img`
  animation: ${RotatingAnimation} 1.5s infinite linear;
`;
const Container = styled.div`
  flex: 4;
  display: flex;
  justify-content: center;
`;

export default LoadingIcon;