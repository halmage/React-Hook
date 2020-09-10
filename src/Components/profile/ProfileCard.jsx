import React from 'react';
/* importando estilos de css */
import './Profile.css';

const ProfileCard = () => {
	return(
		<>
			<div className="card Profile-Card-style">
			  <img src={'./images/articles/image-1.jpg'} className="card-img-top" alt="..."/>
			  <div className="card-body">
			   	 <div className="row">
			   	 	<div className="col-md-7">
			   	 		<p>Nombre: Hugo Rafael Ali</p>
			   	 		<p>Correo: hugo.zorrilla.93@gmail.com</p>
			   	 		<p>Ciudad: Cumaná</p>			  			
			   	 	</div>
			   	 	<div className="col-md-5">
			   	 		<p>Apellido: Zorrilla Garcia</p>
			   	 		<p>Sexo: Masculino</p>
			   	 	</div>
			   	 	<div className="col-md-12">
			   	 		<p>Contenido: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
			   	 	</div>
			   	 </div>
			  </div>
			</div>
		</>
	);
}
export default ProfileCard;