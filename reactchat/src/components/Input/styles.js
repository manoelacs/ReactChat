import styled from 'styled-components';

export const Input = styled.input`

    border: 2px inset ${ props => props.errors ? "red" : "#666666"};
    ::placeholder{
        color: ${ props => props.errors ? "red" : "black"};
    }
    height: 30px;
    width: 200px;
    margin-right: 10px; 

`