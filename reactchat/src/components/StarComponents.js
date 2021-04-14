import React from 'react';
import '../assets/css/StarComponent.css';
import star from '../assets/images/estrela.svg';


 const StarComponent = () => { 
     return(
        <div>
           { 
           
           [ ...Array(5).keys() ].map((i) => (
            <img src={star} alt="" className="filter-yallow"/> 
           ))
                       
                    
           }
            
        </div>
     )           
                   

}; export default StarComponent;