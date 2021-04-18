import React from 'react';
import {Button, Icone} from './styles';
import triangle from '../../assets/images/triangle.svg';

const StyledButton = (props) => {
    console.log(props)
    return(
        <Button {...props}>
             <Icone src={triangle} alt="enviar" errors={props.errors} />
        </Button>
    )
}; export default StyledButton;