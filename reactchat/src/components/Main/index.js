import React, { useState } from 'react';
import { Container, Wrapper } from './styles';
import StyledForm from '../StyledForm';
import Header from '../Header';

const StyledMain = () => {
    const [isOpenChat, setIsOpenChat] = useState(true);
    const handleOpenChat = () => {
        setIsOpenChat(!isOpenChat);
    }
    console.log(isOpenChat);
    return(
        <>
        <Container>
            <Header onClick={handleOpenChat}/>
            { isOpenChat &&
                <Wrapper>
                    <StyledForm/>
                </Wrapper>
            }
        </Container>
        
        </>
        
    );
}; export default StyledMain; 