import React from "react";
import styled from "styled-components";
const faceBook = require("../assets/facebook.png");
const linkedin = require("../assets/linkedin.png");
const instagram = require("../assets/instagram.png");
const twitter = require("../assets/twitter.png");
const youtube = require("../assets/youtube.png");
const Footer = () => {
    return (
        <Wrapper>
          <FooterInfo>
          <ContactInfo>
            <Space>Contact Us</Space> 
            <Space>Privacy Policy</Space>
            <Space>About</Space> 
            <Space>Join Our Team</Space>
          </ContactInfo>
          <SocialNetwork>
<SocialLogo src={faceBook} />
<SocialLogo src={twitter} />
<SocialLogo src={instagram} />
<SocialLogo src={linkedin} />
<SocialLogo src={youtube} />
          </SocialNetwork>
          </FooterInfo>
    </Wrapper>
    )
}

const Wrapper = styled.div`
 position: absolute;
   left: 0;
   bottom: 0;
   top:165%;
   width: 100%;
   height:20%;
   background-color: gray;
   color: white;
   text-align: center;
`;

const FooterInfo = styled.div`
display:flex;
flex-direction:column;
`;
const ContactInfo = styled.div`
display:flex;
flex-direction:row;
font-size:10;
color:black;
padding-top:50px;
margin-left:30%;

`;
const Space = styled.div`
margin-right:30px;
justify-content:space-between;
`;

const SocialNetwork = styled.div`
display:flex;
flex-direction:row;
padding-top:15px;
margin-left:35%;
`;

const SocialLogo = styled.img`
width:2%;
margin-right:30px;
align-content:center;
`;

export default Footer;