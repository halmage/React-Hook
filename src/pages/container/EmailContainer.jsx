import React,{useState} from 'react';

/* Importando componentes */
import EmailPresenter from '../presenter/EmailPresenter';
/* Importando informacion de json */
import EmailInformation from '../../assets/informations/EmailInformation.json';

const EmailContainer = () => {
  const [email,setEmail] = useState([]);

  const handleAddSubmit = (data,e) => {
    	setEmail([
      	 	...email,
      	 	data
      	 ]);			  		
      	 e.target.reset();
  }

  return (
    <>
    	<EmailPresenter 
        email = {email}
    		onAddSubmit = {handleAddSubmit}
        emailInformation = {EmailInformation}
    	/>
    </>
  )
}

export default EmailContainer;