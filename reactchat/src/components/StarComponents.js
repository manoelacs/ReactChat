import React, {useState} from 'react';
import '../assets/css/StarComponent.css';
import star from '../assets/images/estrela.svg';
import star2 from '../assets/images/star_white_24dp.svg';
import StyledFillStar from './FillStar'
import StyledUnfillStar from './UnfillStar'

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
               <StyledFillStar
                  src={ star} 
                  alt=" estrela preenchida"
                  onClick = {(e) => handleInactive()}
               /> 

            :  <StyledUnfillStar 
                  src={ star2}  
                  alt="Estrela vazia" 
                  onClick = {(e) => handleActive()}
                />  
           }    
    </>

     )   
                   

}; export default StarComponent;