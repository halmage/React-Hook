import React from 'react';
/* Importando componentes */
import {useForm} from 'react-hook-form';

const CalculatorForm = ({onSubmit}) => {
  const {register, errors, handleSubmit} = useForm();
  return (
    <>
    	<form onSubmit = {handleSubmit(onSubmit)}>
    		<div className="form-group">
				<label className="profile-form-label">Ingrese operación</label>
				<select className="form-control profile-form-input" 
						name="operation" 
						id="operation" 
						ref={
	                      register({
	                            required: {value:true, message: 'campo operación es obligatorio'}
	                      })
	                   } 
				 >
				  <option value="">-- operación --</option>
				  <option value="1">SUMA</option>
				  <option value="2">RESTA</option>
				  <option value="3">MULTIPLICACIÓN</option>
				  <option value="4">DIVISIÓN</option>
				</select>
				<span className="text-danger text-small d-block mb-2">
                		{errors?.operation?.message}
            	</span>
			</div>
    		<div className="form-group">
				<label className="profile-form-label">Ingrese primer numero</label>
				<input type="text" 
					className="form-control profile-form-input" 
					name="number1" 
					id="number1" 
					ref={
                        register({
                            required: {value:true, message: 'Campo numero1 es obligatorio'}
                        })
                    }	                    
				/>
				<span className="text-danger text-small d-block mb-2">
                		{errors?.number1?.message}
            	</span>
			</div>
			<div className="form-group">
				<label className="profile-form-label">Ingrese segundo numero</label>
				<input type="text" 
					className="form-control profile-form-input" 
					name="number2" 
					id="number2" 
					ref={
                        register({
                            required: {value:true, message: 'Campo numero2 es obligatorio'}
                        })
                    }	                    
				/>
				<span className="text-danger text-small d-block mb-2">
                		{errors?.number2?.message}
            	</span>
			</div>
			<div className="form-group">
				<button type="submit" className="btn btn-lg btn-block btn-primary mb-2">Confirmar</button>
			</div>
    	</form>
    </>
  )
}
export default CalculatorForm;