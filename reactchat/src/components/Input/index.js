import React from 'react';
import {Input} from './styles';

const StyledInput = (props) => {
    
    return(
        <Input {...props } errors = { props.errors}/>
    )
}; export default StyledInput;