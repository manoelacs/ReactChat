import React from 'react';
import {Button} from './styles';

const StyledButton = ( {children}, props) => {
    return(
        <Button {...props }>{children}</Button>
    )
}; export default StyledButton;