import styled from 'styled-components';

export const StyledHeader = styled.nav `
    
    display: flex;
    justify-content: space-between;
    padding: 0 15vw;
    height: 10vh;
    align-items: center;
    background-color: rgb(224,238,242);
`;

 export const ImageLogo = styled.img`
 
    height: 50px;
    width: 50px;
`;
export const ImageButton = styled.img`
    height: 16px;
    width: 20px;
    margin-right: 3px;
`;

 export const BtnHeader = styled.button`
    width: 120px;
    text-align: center;
    border-radius: 3px;
    padding: 5px 20px;
    margin: 0 10px;
    font-weight: 600;
    border: 2px solid white;
    background: ${props => props.primary ? '#1489cef0' : "white"};
    color: ${props => props.primary ? "white" : '#1489cef0'};
`;