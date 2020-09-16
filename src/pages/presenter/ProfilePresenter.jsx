import React from 'react';
/* Importando componentes */
import Index from '../../Components/profile/Index';
const ProfilePresenter = ({data, onSubmit}) => {
	return(
		<>
			<Index 
				data = {data} 
				onSubmit = {onSubmit}
			/>
		</>
	);
}
export default ProfilePresenter;