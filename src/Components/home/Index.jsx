import React from 'react';
/* Importando componentes */
import HomeLogo from './HomeLogo';
import Header from '../layout/Header';
import HomeListImages from './HomeListImages'
import HomeFormSearch from './HomeFormSearch';
/* Importando estilos de css */
import '../../assets/css/main.css';

const Index = (props) => {		
	return(
		<>	
			<Header/>
			<section className="container mt-5">
				<div className="row">
					<div className="col-md-12">
						<HomeLogo/>
					</div>
					<div className="col-sm-8 offset-2">
						<HomeFormSearch/>
					</div>
					<div className="col-md-8 offset-sm-0 offset-md-2 text-center">
						<HomeListImages data={props.data}/>
					</div>
				</div>
			</section>
		</>
	);
}
export default Index;