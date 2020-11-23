import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const AllCrew = (({crew})=>{
    const dispatch = useDispatch();
    return (
        <Wrapper>
            
            {crew.map(({department,job,name})=>{
                return <div>
 <Table> 
     <Tr>                              
 <Th>{department}</Th>
 <Th>{name}</Th>  
 <Th>{job}</Th>
 </Tr>
 </Table>
 </div>
            })}
            
            
        </Wrapper>
    )
});

const Wrapper = styled.div`

display:flex;
flex-direction:column;
width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
`;

const Table = styled.div`
display:flex;
flex-direction:row;
border-collapse: collapse;
padding: 5px;
line-height: 1.42857143;
border-top: 1px solid #ddd;
width: 40%;
margin-bottom: 10px;

`;

const Th = styled.div`
display:flex;
flex-direction:column;
padding-top: 5px;
  padding-bottom: 5px;
  text-align: left;
  width:200px;
`;

const Tr = styled.div`
display:flex;
flex-direction:row;
`;
export default AllCrew;
