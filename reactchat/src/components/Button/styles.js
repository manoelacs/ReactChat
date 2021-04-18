import styled from 'styled-components';

export const Button = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    align-self: center;
    background-color: transparent;
`;
export const Icone = styled.img`
    height: 20px;
    width: 20px;
    filter: ${ 
        props => props.errors 
            ? 'invert(18%) sepia(97%) saturate(6960%) hue-rotate(350deg) brightness(93%) contrast(103%)'
            : 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)'
    };
    
`