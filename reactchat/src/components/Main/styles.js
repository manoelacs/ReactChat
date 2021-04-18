import styled from 'styled-components';

export const Container = styled.main`
    flex: 1;
   /*  margin-left: 10px; */

    @media(max-width: 1000px){
    
    main{
        margin-left: 0px;
        margin-top: 30px;
      
    }  
  }
`;
export const Wrapper = styled.div`
    width: 320px;
    height:200px;
    box-shadow:  0 0 14px rgba(0, 0, 0, 0.02);
    border-radius: 2px;
    padding: 30px 20px;

`;