import React, {useState} from 'react';
import star from '../../assets/images/estrela.svg';
import star2 from '../../assets/images/star_white_24dp.svg';
import {StyledStar} from './styles';

 const StarComponent = ({id, setMatchTrue, setMatchFalse, countStar, setCountStar}) => { 

  const [active, setActive] = useState(false);
  
  const handleActive = () => {
     if(setMatchTrue(id)){
        setActive(true)
        setCountStar(countStar + 1);
        
     }
  }
  const handleInactive = () => {
   if(setMatchFalse(id)){
      setActive(false)
      setCountStar(countStar - 1);
   }
  }
   
     return( 
     <>
        
           { active ? 
               <StyledStar
                  src={ star} 
                  alt=" estrela preenchida"
                  onClick = {(e) => handleInactive()}
               /> 

            :  <StyledStar 
                  src={ star2}  
                  alt="Estrela vazia" 
                  onClick = {(e) => handleActive()}
                />  
           }    
    </>

     )   
                   

}; export default StarComponent;