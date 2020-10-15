import React from 'react';

/* Importando componentes */
import Index from '../../Components/email/Index';

const EmailPresenter = ({onAddSubmit,emailInformation,email}) => {
  return (
    <>
    	<Index
    		email={email}
    		onAddSubmit = {onAddSubmit}
    		emailInformation = {emailInformation}
    	/>
    </>
  )
}

export default EmailPresenter;