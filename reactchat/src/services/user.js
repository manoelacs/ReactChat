import api from '../services/api'; 
import {baseUrl } from "../services/baseUrl";

export  const postUser = async (fullname, cidade, nascimentoDate, email, avaliacao ) =>{

    return  await api.post('/users', {
        fullname,
        cidade,
        nascimentoDate,
        email,
        avaliacao,    
     })
      .then(response => {        
          if (response.status ===  201) {
            console.log(response);
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
        error => {
              throw error;
        })
      .then(response => { console.log(response) })
      .catch(error =>  { 
          console.log('post user', error.message); 
          alert('Your user could not be posted\nError: '+error.message); 
    });
}

