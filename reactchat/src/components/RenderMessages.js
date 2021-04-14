import React from 'react';
import smile from '../assets/images/smile.jpg';
import '../assets/css/RenderMessages.css';


 const RenderMessages = () => { 
     return(
        <li className="dev-item">
        
            <img src={smile} alt="Chatnilson"/>
            <div className="balao2">
                        
                <p> "Olá, eu sou Chatnilson, tudo bem? Para começarmos,
                    preciso saber seu nome."
                </p>
                        
            </div>      
        </li>
     )           
                   

}; export default RenderMessages;