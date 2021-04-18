import styled from 'styled-components';


export const Container = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    border-radius: 50%;
    justify-content: center; 

`;
export const Balloon = styled.div`
    margin: 0 auto; 
    background: #FFFFFF;
    font-family: 'open sans';
    font-size: 0.85em;
    line-height: 1.6em;  
    border-radius: 15px;
    width: 300px;
    height: auto;
    color: black;
    padding: 20px;
    position: relative;

    :after{ /*Triangulo*/
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;    
    border-bottom: 20px solid #FFFFFF;
    top: 9px; 
    right: -6%;
    

}`;
export const ContainerMessageError = styled.div`
    color:'red';
`;