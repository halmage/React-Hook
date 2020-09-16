import React,{useState} from 'react';
/* Importando componentes */
import ProfilePresenter from '../presenter/ProfilePresenter';

const ProfileContainer = () => {
	const [entrada,setEntrada] = useState([]);
		
	const handleSubmit = (data,e) => {
		setEntrada([
			...entrada,
				data
		]);
		e.target.reset();
	}

	return (
		<ProfilePresenter
			data = {entrada}			
			onSubmit = {handleSubmit}
		/>
	);
}
export default ProfileContainer;
