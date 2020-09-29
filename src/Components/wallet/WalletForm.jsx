import React from 'react';
import {useForm} from 'react-hook-form';

const WalletForm = ({onSubmit}) => {
  const {register, errors, handleSubmit} = useForm();
  return (
    <>
    	<form className="form-inline d-flex justify-content-center mt-3"
    		  onSubmit={handleSubmit(onSubmit)}>
		  <div className="form-group mb-2">
		    <input type="text" 
		    	   className="form-control-lg" 
		    	   id="item" 
		    	   name="item"
		    	   placeholder="Ingrese articulo"
		    	   ref={
	                        register({
	                            required: {value:true, message: 'El campo articulo es obligatorio'}
	                        })
	                    }/>
			<span className="text-danger text-small d-block mb-2">
				{errors?.item?.message}
			</span>
		  </div>
		  <div className="form-group mx-sm-1 mb-2">
		    <input type="text" 
		    	   className="form-control-lg" 
		    	   id="price" 
		    	   name="price"
		    	   placeholder="Ingrese precio"
		    	   ref={
	                        register({
	                            required: {value:true, message: 'El campo precio es obligatorio'}
	                        })
	                    }/>
	        <span className="text-danger text-small d-block mb-2">
				{errors?.price?.message}
			</span>
		  </div>
		  <button type="submit" className="btn btn-lg btn-primary mb-2">Confirmar</button>
		</form>
    </>
  )
}
export default WalletForm;