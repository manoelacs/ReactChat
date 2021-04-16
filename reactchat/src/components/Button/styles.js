import styled from 'styled-components';

export const Button = styled.div`
    width: 30px;
    height: 30px;
    border:none;
    background-color: transparent;
`;
export const Icone = styled.span`
    fill: ${props => props.errors ? "red" : "green"}; 
`