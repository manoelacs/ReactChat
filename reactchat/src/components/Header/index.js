import React from 'react';
import {StyledHeader, ImageLogo, BtnHeader, ImageButton} from './styles';
import site_logo from '../../assets/images/chatbot.svg';
import iconChat from '../../assets/images/chat.svg';
import iconHome from '../../assets/images/home.svg';

const Header = ({onClick}) => {
    return (
      <StyledHeader>
        <ImageLogo src={site_logo} alt="Logo Smart Bank" />
        <div>
          <BtnHeader href="https://google.com">
           <ImageButton src ={iconHome} /> Home
          </BtnHeader>
          <BtnHeader primary onClick ={onClick}>
          <ImageButton src={iconChat}/> Chat
          </BtnHeader>
        </div>
      </StyledHeader>
    );
  };
  
  export default Header;