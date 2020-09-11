import React from 'react';
/* importando estilos de css */
import './Profile.css';

const ProfileCard = ({data}) => {
	return(
		<>
			<div className="card profile-card-style">
			  <img src={data.avatar} className="profile-card-image card-img-top" alt={data.avatar}/>
			  <div className="card-body">
			   	 <div className="row">
			   	 	<div className="col-md-7">
			   	 		<p>Nombre: {data.name}</p>
			   	 		<p>Correo: {data.email}</p>
			   	 		<p>Ciudad: {data.city}</p>			  			
			   	 	</div>
			   	 	<div className="col-md-5">
			   	 		<p>Apellido: {data.last_name}</p>
			   	 		<p>Sexo: {data.sex}</p>
			   	 	</div>
			   	 	<div className="col-md-12">
			   	 		<p>Contenido: {data.content}</p>
			   	 	</div>
			   	 </div>
			  </div>
			</div>
		</>
	);
}
export default ProfileCard;