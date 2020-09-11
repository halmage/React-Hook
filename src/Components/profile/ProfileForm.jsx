import React from 'react';
/* importando estilos de css */
import './Profile.css';

const ProfileForm = ({data,onChange}) => {
	console.log(onChange);
	return(
		<>
			<form>
				<div className="form-group">
					<label className="profile-form-label">Avatar</label>
					<input type="text" className="form-control profile-form-input" name="avatar" id="avatar" value={data.avatar} onChange = {onChange} />
				</div>
				<div className="form-group">
					<label className="profile-form-label">Nombre:</label>
					<input type="text" className="form-control profile-form-input" name="name" id="name" value={data.name} onChange = {onChange} />
				</div>
				<div className="form-group">
					<label className="profile-form-label">Apellido:</label>
					<input type="text" className="form-control profile-form-input" name="last_name" id="last_name" value={data.last_name} onChange = {onChange}/>
				</div>
				<div className="form-group">
					<label className="profile-form-label">Correo electronico:</label>
					<input type="email" className="form-control profile-form-input" name="email" id="email" value={data.email} onChange = {onChange} />
				</div>
				<div className="form-group">
					<label className="profile-form-label">Sexo:</label>
					<select className="form-control form-control profile-form-input" name="sex" id="sex" value={data.sex} onChange = {onChange}>
					  <option value="">-- sexo --</option>
					  <option value="masculino">Masculino</option>
					  <option value="femenino">Femenino</option>
					</select>
				</div>
				<div className="form-group">
					<label className="profile-form-label">Ciudad:</label>
					<input type="text" className="form-control profile-form-input" name="city" id="city" value={data.city} onChange = {onChange}/>
				</div>
				<div className="form-group">
					<label className="profile-form-label">Contenido:</label>
					<textarea className="form-control profile-form-input" name="content" id="content" value={data.content} onChange = {onChange} rows="3"></textarea>
				</div>
				<button type="submit" className="btn btn-primary profile-form-button btn-block">Enviar</button>
			</form>
		</>
	);
}
export default ProfileForm;