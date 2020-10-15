import React from 'react';

/* Importando componentes */
import Header from '../layout/Header';
import EmailAddForm from './EmailAddForm';
import EmailConversation from './EmailConversation';

/* Importando estilos de css */
import '../../assets/css/main.css';

const Index = ({onAddSubmit,emailInformation,email}) => {
  return (
    <>
    	<Header/>
    	<section className="container mt-5">
    		<div className="row">
	    		<div className="col-md-4">
	    			<EmailAddForm
              onAddSubmit = {onAddSubmit}
              emailInformation = {emailInformation}
            />
	    		</div>
	    		<div className="col-md-8">
	    			<EmailConversation
              email={email}
              emailInformation={emailInformation}
            />
	    		</div>
    		</div>
    	</section>
    </>
  )
}
export default Index;