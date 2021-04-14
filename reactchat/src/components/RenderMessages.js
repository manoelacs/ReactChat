import React from 'react';
import smile from '../assets/images/smile.jpg';
import '../assets/css/RenderMessages.css';


 const RenderMessages = ({message}) => { 
     return(
        <li className="dev-item">
        
            <img src={smile} alt="Chatnilson"/>
            <div className="balao2">
                        
                <p> {message} </p>
                        
            </div>      
        </li>
     )           
                   

}; export default RenderMessages;