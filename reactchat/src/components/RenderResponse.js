import React from 'react';
import '../assets/css/RenderResponse.css';
import triangle from '../assets/images/triangle.svg';


 const RenderResponse = ({children, nota, onSubmit}) => { 
     return(
        <li >
            <div className="balao">
               {children}
               { !nota ? <button  className="balaoButton" onClick={onSubmit}><img src={triangle} alt="enviar" className="filter-green"/></button>
               : null}
            </div>            
        </li>
     )           
                   

}; export default RenderResponse;