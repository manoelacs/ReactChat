import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    
    border-radius: 50%;

    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
    border-radius: 2px;
    padding: 20px;

`;

export const Balloon = styled.div`
    margin: 0 auto; 
    background: #FFFFFF;
    font-family: 'open sans';
    font-size: 0.85em;
    line-height: 1.6em;  
    border-radius: 15px;
    width: 100%; 
    height: auto;
    color: black;
    padding: 20px;
    position: relative;
    margin-top: 30px;

    :after{ /*Triangulo*/
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #FFFFFF;
    left: -20px; 
    right: 20%;
    top: 30px;
}
`;

export const ContainerMessage = styled.p`
     color: #666666;
     font-size: 15px;
     line-height: 20px;
     margin: 10px 0;
     text-align: left;
     text-align-last: justify;
     font-weight: normal;
     /* margin: 10px; */
`;
 
export const PerfilImage = styled.img`
    height: 50px;
    width: 50px;
   
    padding-right: 20px;
`;
