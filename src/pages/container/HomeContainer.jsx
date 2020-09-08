import React,{useState} from 'react';
/* Importando Componentes */
import HomePresenter from '../presenter/HomePresenter';
/* Importando informacion de json */
import HomeInformation from '../../assets/informations/HomeInformation.json';

const HomeContainer = () => {
	const [data] = useState([HomeInformation]);
	return(
		<HomePresenter data = {data}/>
	);
}
export default HomeContainer;