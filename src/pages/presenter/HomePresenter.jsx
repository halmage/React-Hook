import React from 'react';
/* Importando componentes */
import Index from '../../Components/home/Index';

const HomePresenter = (props) => {
	return(
		<>
			<Index data={props.data[0].home}/>
		</>
	);
}
export default HomePresenter;