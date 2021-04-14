import React, { useEffect } from 'react';
import '../assets/css/Main.css';
import  RenderMessages from "../components/RenderMessages";
import RenderResponse from './RenderResponse';

 const Main = ({devs, errMess, isLoading}) => { 
     console.log({devs, errMess, isLoading});
        
    return (
        <main>
            <div className="containerMessages">
                <ul >
                    
                    <RenderMessages/>
                    <RenderResponse/>

                    <RenderMessages/>
                    <RenderResponse/>

                    <RenderMessages/>
                    <RenderResponse/>

                    <RenderMessages/> 
                    <RenderResponse/>            
                                
                                
                </ul>
            </div>
           
        </main>
    )     

}; export default Main;