import React from 'react';
import '../assets/css/RenderResponse.css';
import triangle from '../assets/images/triangle.svg';


 const RenderResponse = () => { 
     return(
        <li >
            <div className="balao">
                <input type="text" className="balaoInput" placeholder="digite o texto"/> 
                <button  className="balaoButton"><img src={triangle} alt="enviar" className="filter-green"/></button>
            </div>            
        </li>
     )           
                   

}; export default RenderResponse;