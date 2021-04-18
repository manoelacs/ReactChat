import React, {useState} from 'react';
import RenderResponse from '../RenderResponse';
import StarComponent from '../StarComponent';

const RenderStar = ({setCountStar, countStar}) => {
    const initControlStar = [ 
        {id: 0, prev: -1, match: false, next: 1 },
        {id: 1, prev: 0,  match: false, next: 2 },
        {id: 2, prev: 1,  match: false, next: 3 },
        {id: 3, prev: 2,  match: false, next: 4 },
        {id: 4, prev: 3,  match: false, next: -1 },
      ]; 
      const [controlStar, seControlStar] = useState(initControlStar);  


    const setMatchTrue = (id) => {
       let prev = controlStar[id].prev;
       let next = controlStar[id].next;     

        if(prev === -1){
            if(!controlStar[next].match){
                seControlStar([...controlStar, controlStar[id].match = true])
                controlStar[id].match = true;
                setCountStar(countStar + 1);
                return true;
            }
        }
        else if(next === -1){
            if(controlStar[prev].match){
                controlStar[id].match = true;
                setCountStar(countStar + 1);
                return true;
            }
        }
        else if(controlStar[prev].match && !controlStar[next].match){
            
                controlStar[id].match = true;
                setCountStar(countStar + 1);
                return true;
            }
        else{
            console.log("deu ruim ")
        }
        
    }
    const setMatchFalse = (id) => {
    const prev = controlStar[id].prev;
       const next = controlStar[id].next

        if(next === -1){
            if(controlStar[prev].match){
                controlStar[id].match = false;
                setCountStar(countStar - 1);
                return true;
            }
        }
        if(prev === -1){
            if(!controlStar[next].match){
                controlStar[id].match = false;
                setCountStar(countStar - 1);
                return true;
            }
        }
        else{
            if(controlStar[prev].match && !controlStar[next].match){
                controlStar[id].match = false;
                setCountStar(countStar - 1);
                return true;
            }
        }

    }
 

    return(
        <RenderResponse nota={1} >
            <StarComponent 
                id={controlStar[0].id}
                setMatchTrue = { (id) => setMatchTrue(id) }
                setMatchFalse = { (id) => setMatchFalse(id) }
                countStar = { countStar}
                setCountStar = {setCountStar}
            />
            <StarComponent 
                id={controlStar[1].id}               
                setMatchTrue = { (id) => setMatchTrue(id) }
                setMatchFalse = { (id) => setMatchFalse(id) }
                countStar = { countStar}
                setCountStar = {setCountStar}
            />
             <StarComponent 
                id={controlStar[2].id}
                setMatchTrue = { (id) => setMatchTrue(id) }
                setMatchFalse = { (id) => setMatchFalse(id) }
                countStar = { countStar}
                setCountStar = {setCountStar}
            />
            <StarComponent 
                id={controlStar[3].id}               
                setMatchTrue = { (id) => setMatchTrue(id) }
                setMatchFalse = { (id) => setMatchFalse(id) }
                countStar = { countStar}
                setCountStar = {setCountStar}
            />
             <StarComponent 
                id={controlStar[4].id}
                setMatchTrue = { (id) => setMatchTrue(id) }
                setMatchFalse = { (id) => setMatchFalse(id) }
                countStar = { countStar}
                setCountStar = {setCountStar}
            />
        </RenderResponse> 
        
    )
}; export default RenderStar;

