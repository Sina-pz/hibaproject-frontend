import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const DropdownMenu = (props) => {
  const [dropDown, setDropDown] = useState(false);
  const dispatch = useDispatch();
  const Genre = props.Genre;
  console.log(props.menuOptions);
  return (
    <div>
     
      <MenuButton
        onClick={() => {
          setDropDown(!dropDown);
        }}
      >
        Genre
      </MenuButton>
      {dropDown && (
        <MenuContainer>
          {props.menuOptions &&
            props.menuOptions.genres.map((genre) => (
              <NavBarItem to={`/genrePage/${genre.id}`} onClick={()=>{
              setDropDown(false);
          }}>
                {genre.name}
              </NavBarItem>
            ))}
        </MenuContainer>
      )}
     
    </div>
  );
};


const MenuButton = styled.button`

 background-color: rgb(150, 150, 150);
  padding: 5px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 1em;
  color: white;
  transition: background-color 1s;
  margin-right:7em;
  `;

const MenuContainer = styled.div`
  position: absolute;
  display:flex;
  flex-direction:column;
  min-width:160px;
  z-index:100;
  font-family: Arial;
  padding: 0 50px;
  height:25 px;
  width:25px;
  align-items:initial;
  background-color: white;
`;

const NavBarItem = styled(Link)`
position: relative;
display:flex;
  flex-direction:column;
  background-color: white;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  float:center;
  padding:5px 0;
  margin:2px 0;
  font-size:20px;
  margin-right:7em;
  text-decoration:none;
`;
export default DropdownMenu;
