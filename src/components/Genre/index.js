import React from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import GetGenre from "../../hooks/getGenre";

const Genre = () => {
  const GenreList = GetGenre ()
    return (
      <DropdownContainer>
        <DropdownMenu
          title="Genre"
          menuOptions={GenreList}
        />
  
        
      </DropdownContainer>
    );
  };

  const DropdownContainer = styled.div`
  display: flex;
  
  align-items: center;
`;

export default Genre;