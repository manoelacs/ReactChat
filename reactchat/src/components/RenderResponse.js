import React from 'react';
import '../assets/css/RenderResponse.css';
import triangle from '../assets/images/triangle.svg';
import StyledButton from './Button';


 const RenderResponse = ({children, nota, onSubmit, errors}) => { 
     return(
        <li >
            <div className="balao">
               {children}
               { !nota ? 
                  <button  className="balaoButton" onClick={onSubmit}>
                     <img src={triangle} alt="enviar" className={"filter-green"}/>
                  </button>
                  : null}
               {errors && <div style={{color:'red'}}>{errors}</div>}
            </div>            
        </li>
     )           
                   

}; export default RenderResponse;