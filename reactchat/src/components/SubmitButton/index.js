import React from 'react';
import { Container, Button } from './styles';

const StyledSubmitButton = (props) => {
    return(
        <Container>
             <Button {...props}>Salvar</Button>
        </Container>
       
    )

}; export default StyledSubmitButton