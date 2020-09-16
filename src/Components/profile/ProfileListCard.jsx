import React,{Fragment} from 'react';
/* importando estilos de css */
import './Profile.css';

const ProfileListCard = ({data}) => {
	
	return(
		<>
		{
			data.map((d,i) => {
				return(
					<div key={i} className="card profile-card-style">
						<img src={d.avatar} className="profile-card-image card-img-top" alt={d.avatar}/>
						<div className="card-body">
							<div className="row">
								<div className="col-md-7">
									<p>Nombre: {d.name}</p>
									<p>Correo: {d.email}</p>
									<p>Ciudad: {d.city}</p>
								</div>
								<div className="col-md-5">
									<p>Apellido: {d.last_name}</p>
									<p>Sexo: {d.sex}</p>
								</div>
								<div className="col-md-12">
									<p>Contenido: {d.content}</p>
								</div>
							</div>
						</div>
					</div>
				)
			})
		}
		</>
	);
	
}
export default ProfileListCard;