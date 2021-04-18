import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import StyledMessages from '../RenderMessages';
import StyledResponse from '../RenderResponse';
import { postUser } from '../../services/user';
import StyledInput from '../Input';
import ResponseStar from '../ResponseStar';
import StyledSubmitButton from '../SubmitButton';
import {Form, Container} from './styles';


const StyledForm = () => {  
  

  const [cidadeVisible, setCidadeVisible] = useState(false);
  const [nacimentoDateVisible, setNascimentoDateVisible] = useState(false);
  const [emailVisible, setEmailVisible] = useState(false);
  const [avaliacaoVisible, setAvaliacaoVisible] = useState(false);
  const [countStar, setCountStar] = useState(0);

 
  
  const formik = useFormik({
    initialValues: {
      fullName: '',
      cidade: '',
      nascimentoDate: '',
      email: '',
      avaliacao: 0,
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Digite seu nome'),
      cidade: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      nascimentoDate: Yup.date()
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      avaliacao: Yup.number()
        .required('Required')
    }),
    onSubmit: values => {
      formik.values.avaliacao = countStar;
      postUser( JSON.stringify(values, null, 2))
      alert(JSON.stringify(values, null, 2));
    },
  });  

  const dataMessages = [
    { messenger: "Olá, su sou Chatnilson, tudo bem? Para começarmos, preciso saber seu nome completo."},
    { messenger: "Que satisfação,    " + formik.values.fullName+  ". Agora que sei seu nome, qual a cidade e estado que você mora"},
    { messenger: "Legal, agora que sabemos sua cidade e estado, quando foi que você nasceu?"},
    { messenger: "Agora me fala teu e-mail, por gentileza"},
    { messenger: "Você finalizou o teste. Faça uma avaliação sobre o processo que realizou até chegar aqui. Nós agradecemos"}
]
console.log(countStar)
  return (
    <Form onSubmit={formik.handleSubmit}>
        <Container>
            <>
              <StyledMessages message={dataMessages[0].messenger} active={true}/>
              <StyledResponse onClick={ () => setCidadeVisible(true)}   >
                  <StyledInput
                          id="fullName"
                          name="fullName"
                          type="text"
                          placeholder="Nome e sobrenome"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.fullName}
                          errors={formik.touched.fullName}
                  />               
              </StyledResponse >
              
           
           </>
            
            { cidadeVisible &&
                <>        
                  
               
                    <StyledMessages  message={dataMessages[1].messenger} active={cidadeVisible} />
                    <StyledResponse onClick={()=> setNascimentoDateVisible(true)} >
                        <StyledInput
                                id="cidade"
                                name="cidade"
                                type="text"
                                placeholder="Cidade"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.cidade}
                                errors={formik.touched.cidde}
                            />                           
                    </StyledResponse>
                   
                </>
            }

            { 
               nacimentoDateVisible && 
            <>
                <StyledMessages  message={dataMessages[2].messenger} active={nacimentoDateVisible}/>
                 <StyledResponse onClick={()=> setEmailVisible(true)} >
                     <StyledInput
                             id="nascimentoDate"
                             name="nascimentoDate"
                             type="date"
                             placeholder="00/00/0000"
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             value={formik.values.nascimentoDate}
                             errors={formik.touched.nascimentoDate}
                         />                         
                 </StyledResponse>  
            </> }
     
            { emailVisible && 
            <> 
               <StyledMessages
                  message={dataMessages[3].messenger} 
                  active={emailVisible} />
               <StyledResponse 
                  onClick={()=> setAvaliacaoVisible(true)} 
                  errors={formik.errors.email}>
                  <StyledInput
                             id="email"
                             name="email"
                             type="email"
                             placeholder="E-mail"
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             value={formik.values.email}
                             errors={ formik.errors.email}
                  />                         
              </StyledResponse >
            </>} 
            { avaliacaoVisible  && 
            <>     
                 <StyledMessages  
                  message={dataMessages[4].messenger} 
                  active={avaliacaoVisible}                
                 />
                  <ResponseStar setCountStar = {setCountStar } countStar = {countStar }/>                  
     
                 <StyledSubmitButton type='submit'/> 
            </> }       

        </Container>
      
    </Form>
  );
}; export default StyledForm;
