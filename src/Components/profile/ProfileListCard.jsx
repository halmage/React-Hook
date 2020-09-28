import React from 'react';

const ProfileListCard = ({users,editUser,onClickDelete}) => {
	return(
		<>
		{
			users.map((user) => {
				return(
					<div key={user.id} className="col-md-6 mt-5">
						<div className="card profile-card-style">
							<img src={user.avatar} className="profile-card-image card-img-top" alt={user.avatar}/>
							<div className="card-body">
								<div className="row">
									<div className="col-md-7">
										<p>Nombre: {user.name}</p>
										<p>Correo: {user.email}</p>
										<p>Ciudad: {user.city}</p>
									</div>
									<div className="col-md-5">
										<p>Apellido: {user.last_name}</p>
										<p>Sexo: {user.sex}</p>
									</div>
									<div className="col-md-12">
										<p>Contenido: {user.content}</p>								
									</div>
								</div>
								<div className="d-flex justify-content-center">	
									<button type="button" className="btn btn-warning mr-1" onClick={() => editUser(user)}>
										editar
									</button>
									<button type="button" className="btn btn-danger" onClick={() => onClickDelete(user.id)}>
										eliminar
									</button>
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