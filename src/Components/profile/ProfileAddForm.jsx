import React from 'react';
import {useForm} from 'react-hook-form';

const ProfileAddForm = ({onAddSubmit}) => {
	const {register, errors, handleSubmit} = useForm();
	return(
		<>
			<form onSubmit={handleSubmit(onAddSubmit)}>
				<div className="form-group">
					<label className="profile-form-label">Avatar</label>
					<input type="text" 
						className="form-control profile-form-input" 
						name="avatar" 
						id="avatar" 
						ref={
	                        register({
	                            required: {value:true, message: 'Ingrese avatar de la persona'}
	                        })
	                    }	                    
					/>
					<span className="text-danger text-small d-block mb-2">
                    		{errors?.avatar?.message}
                	</span>
				</div>
				<div className="form-group">
					<label className="profile-form-label">Nombre:</label>
					<input type="text" 
						   className="form-control profile-form-input" 
						   name="name" 
						   id="name"
						   ref={
		                      register({
		                            required: {value:true, message: 'Ingrese un nombre'}
		                      })
		                   }		                   
					/>
					<span className="text-danger text-small d-block mb-2">
                    		{errors?.name?.message}
                	</span>
				</div>
				<div className="form-group">
					<label className="profile-form-label">Apellido:</label>
					<input type="text" 
						   className="form-control profile-form-input" 
						   name="last_name" 
						   id="last_name"
						   ref={
		                      register({
		                            required: {value:true, message: 'Ingrese un nombre'}
		                      })
		                   } 		                   
					/>
					<span className="text-danger text-small d-block mb-2">
                    		{errors?.last_name?.message}
                	</span>
				</div>
				<div className="form-group">
					<label className="profile-form-label">Correo electronico:</label>
					<input type="email" 
					       className="form-control profile-form-input" 
					       name="email" 
					       id="email"
					       ref={
		                      register({
		                            required: {value:true, message: 'Ingrese correo electronico'}
		                      })
		                   }  		                   
					 />
					<span className="text-danger text-small d-block mb-2">
                    		{errors?.email?.message}
                	</span>
				</div>
				<div className="form-group">
					<label className="profile-form-label">Sexo:</label>
					<select className="form-control form-control profile-form-input" 
							name="sex" 
							id="sex" 
							ref={
		                      register({
		                            required: {value:true, message: 'Ingrese sexo'}
		                      })
		                   } 
					 >
					  <option value="">-- sexo --</option>
					  <option value="masculino">Masculino</option>
					  <option value="femenino">Femenino</option>
					</select>
					<span className="text-danger text-small d-block mb-2">
                    		{errors?.sex?.message}
                	</span>
				</div>
				<div className="form-group">
					<label className="profile-form-label">Ciudad:</label>
					<input type="text" 
					       className="form-control profile-form-input" 
					       name="city" 
					       id="city"
					       ref={
		                      register({
		                            required: {value:true, message: 'Ingrese un ciudad'}
		                      })
		                   } 
					 />
					 <span className="text-danger text-small d-block mb-2">
                    		{errors?.city?.message}
                	</span>
				</div>
				<div className="form-group">
					<label className="profile-form-label">Contenido:</label>
					<textarea className="form-control profile-form-input" 
					          name="content" 
					          id="content" 
					          rows="3"
					          ref={
			                      register({
			                            required: {value:true, message: 'Ingrese un contenido'}
			                      })
			                  }
					>					          
					</textarea>
					<span className="text-danger text-small d-block mb-2">
                    		{errors?.content?.message}
                	</span>
				</div>
				<button type="submit" className="btn btn-dark profile-form-button btn-block">crear usuario</button>
			</form>
		</>
	);
}
export default ProfileAddForm;