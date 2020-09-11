import React from 'react';
/* Importando componentes */
import Index from '../../Components/profile/Index';
const ProfilePresenter = ({data, onChange}) => {
	return(
		<>
			<Index data = {data} 
				   onChange = {onChange}
			/>
		</>
	);
}
export default ProfilePresenter;