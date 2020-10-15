import React from 'react';

/* Importando componentes */
import {useForm} from 'react-hook-form';
import EmailListUser from './EmailListUser';

const EmailAddForm = ({onAddSubmit,emailInformation}) => {
  const {register, errors, handleSubmit} = useForm();
  return (
    <>
    	<div className="card">    		
	    	<div className="card-header bg-dark text-light text-center">    
	    		<span className="text-uppercase">formulario de mensajeria</span>		
	    	</div>
	    	<div className="card-body">
	    		<form onSubmit={handleSubmit(onAddSubmit)}>
	    			<div className="form-group">
	    				<label>de</label>
	    				<select className="form-control" 
	    						id="to" 
	    						name="to"
	    						ref={
			                      register({
			                            required: {value:true, message: 'campo operación es obligatorio'}
			                      })
			                   } 
	    				>
	    				<option value="">-- Seleccione un usuario --</option>
	    				<EmailListUser emailInformation={emailInformation}/>
	    				</select>
	    				<span className="text-danger text-small d-block mb-2">
		                	{errors?.to?.message}
		            	</span>
	    			</div>
	    			<div className="form-group">
	    				<label>para</label>
	    				<select className="form-control" 
	    						id="from" 
	    						name="from"
	    						ref={
			                      register({
			                            required: {value:true, message: 'campo operación es obligatorio'}
			                      })
			                   }
	    				>
	    					<option value="">-- Seleccione un usuario --</option>
	    					<EmailListUser emailInformation={emailInformation}/>
	    				</select>
	    				<span className="text-danger text-small d-block mb-2">
		                	{errors?.from?.message}
		            	</span>
	    			</div>
	    			<div className="form-group">
	    				<label>Mensaje</label>
	    				<textarea id="message" 
	    						  name="message" 
	    						  className="form-control"
	    						  ref={
			                      register({
			                            required: {value:true, message: 'campo operación es obligatorio'}
			                      })
			                   }
	    				>
	    				</textarea>
	    				<span className="text-danger text-small d-block mb-2">
		                	{errors?.message?.message}
		            	</span>
	    			</div>
	    			<div className="form-group">
	    				<button type="submit" className="btn btn-block btn-dark">Confirmar</button>
	    			</div>
	    		</form>
	    	</div>
    	</div>
    </>
  )
}

export default EmailAddForm;