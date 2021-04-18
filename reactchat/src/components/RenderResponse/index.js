import React from 'react';

import StyledButton from '../Button';
import {Container, Balloon, ContainerMessageError} from './styles';

const StyledResponse = ({children, nota, onClick, errors}) => { 
    console.log(errors)
    return(
       <Container >
           <Balloon>
              {children}

              { !nota ? 
                 <StyledButton onClick={onClick} errors={errors}/>
                 : null}
              { errors && <ContainerMessageError >{errors}</ContainerMessageError>}
           </Balloon>            
       </Container>
    )           
                  

}; export default StyledResponse;