import React from 'react';
/* Importando estilos de css */
import './Home.css';

const HomeFormSearch = () => {
	return(
		<>
			<form>
				<div className="input-group mb-2 mr-sm-2">					
					<input type="text" className="form-control home-form-style" id="inlineFormInputGroupUsername2" placeholder="Username"/>
					<div className="input-group-prepend">
						<button className="btn btn-primary home-form-style">Buscar</button>
					</div>
				</div>
			</form>
		</>
	);
}
export default HomeFormSearch;