import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import '../assets/css/Main.css';
import  RenderMessages from "../components/RenderMessages";
import RenderResponse from './RenderResponse';
import FormItens from './Form';

 const Main = () => {  
     
   
    const response = [
        
        {placeholder: "Nome e sobrenome"},
        {placeholder: "Cidade"},
        {placeholder: 'dataNacimento'},
        {placeholder: "E-mail"},
        {placeholder: "Avaliacao"}
    ]
        
    return (
        <main>
            <div className="containerMessages">
                {/* <ul >                    
                    <RenderMessages/>
                    <RenderResponse/>                           
                                
                                
                </ul> */}
                <FormItens/>
            </div>
           
        </main>
    )     

}; export default Main;