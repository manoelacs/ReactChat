import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import RenderMessages from './RenderMessages';
import RenderResponse from './RenderResponse';
import StarComponent from './StarComponents';
import '../assets/css/Form.css';
import { postUser } from '../services/user';



const FormItens = () => {


  const [cidadeVisible, setCidadeVisible] = useState(false);
  const [nacimentoDateVisible, setNascimentoDateVisible] = useState(false);
  const [emailVisible, setEmailVisible] = useState(false);
  const [avaliacaoVisible, setAvaliacaoVisible] = useState(false);


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
      postUser( JSON.stringify(values, null, 2))
      alert(JSON.stringify(values, null, 2));
      
      

    },
  });
  const onChange = () =>{

  }

  const dataMessages = [
    { messenger: "Olá, su sou Chatnilson, tudo bem? Para começarmos, preciso saber seu nome completo."},
    { messenger: "Que satisfação,    " + formik.values.fullName+  ". Agora que sei seu nome, qual a cidade e estado que você mora"},
    { messenger: "Legal, agora que sabemos sua cidade e estado, quando foi que você nasceu?"},
    { messenger: "Agora me fala teu e-mail, por gentileza"},
    { messenger: "Você finalizou o teste. Faça uma avaliação sobre o processo que realizou até chegar aqui. Nós agradecemos"}
]
console.log(dataMessages)
console.log(cidadeVisible);
  return (
    <form onSubmit={formik.handleSubmit}>
        <ul className="wrapper">
            
            <RenderMessages message={dataMessages[0].messenger}/>
            <RenderResponse onSubmit={()=> setCidadeVisible(true)}  >
                <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Nome e sobrenome"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fullName}
                />
                { formik.touched.fullName && formik.errors.fullName ? (
                    <div style={{color: 'red'}}>{formik.errors.fullName}</div>
                ) : null }
            </RenderResponse >
            { cidadeVisible &&
                <>
                    <RenderMessages  message={dataMessages[1].messenger}/>
                    <RenderResponse onSubmit={()=> setNascimentoDateVisible(true)}>
                        <input
                                id="cidade"
                                name="cidade"
                                type="text"
                                placeholder="Cidade"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.cidade}
                            />
                            {/* formik.touched.cidade && formik.errors.cidade ? (
                                <div>{formik.errors.cidade}</div>
                            ) : null */}
                    </RenderResponse>
                </>
            }

            { 
               nacimentoDateVisible && 
            <>
                <RenderMessages  message={dataMessages[2].messenger}/>
                 <RenderResponse onSubmit={()=> setEmailVisible(true)}>
                     <input
                             id="nascimentoDate"
                             name="nascimentoDate"
                             type="date"
                             placeholder="00/00/0000"
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             value={formik.values.nascimentoDate}
                         />
                         {/* formik.touched.nascimentoDate && formik.errors.nascimentoDate ? (
                             <div>{formik.errors.nascimentoDate}</div>
                         ) : null */}
                 </RenderResponse>  
            </> }
     
            { emailVisible && 
            <> 
               <RenderMessages message={dataMessages[3].messenger} />
               <RenderResponse onSubmit={()=> setAvaliacaoVisible(true)} errors={formik.errors.email}>
                  <input
                             id="email"
                             name="email"
                             type="email"
                             placeholder="E-mail"
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             value={formik.values.email}
                  />
                         {/* formik.touched.email && 
                         formik.errors.email ? (
                             <div>{formik.errors.email}</div>
                         ) : null */}
              </RenderResponse >
            </>}

            {avaliacaoVisible && 
            <>     
                 <RenderMessages  message={dataMessages[4].messenger}/>
                  <RenderResponse nota={1}>
                      <StarComponent/>
                  </RenderResponse>
     
                 <li>
                      <button type="submit">Salvar</button>
                 </li> 
            </> }       

        </ul>
      
    </form>
  );
}; export default FormItens;