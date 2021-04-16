import styled from 'styled-components';

export const Input = styled.input`

    border: 2px inset ${props => props.errors ? "red" :'-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))'};
    ::placeholder{
        color: ${props => props.errors ? "red" : "black"};
    }
    height: 30px;
    width: 200px;
    margin-right: 10px; 

`