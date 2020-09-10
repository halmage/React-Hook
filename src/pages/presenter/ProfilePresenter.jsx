import React from 'react';
/* Importando componentes */
import Index from '../../Components/profile/Index';
const ProfilePresenter = (props) => {
	const {onChange} = props;
	return(
		<>
			<Index onChange = {onChange}/>
		</>
	);
}
export default ProfilePresenter;