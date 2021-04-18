import React from 'react';
import {Input} from './styles';

const StyledInput = (props) => {
    console.log(props);
    return(
        <Input {...props } errors = { props.errors}/>
    )
}; export default StyledInput;