import React from 'react';
/* Importando componentes */
import Index from '../../Components/profile/Index';
const ProfilePresenter = ({data, onSubmit, onClickUpdate, onClickDelete}) => {
	return(
		<>
			<Index 
				data = {data} 
				onSubmit = {onSubmit}
				onClickUpdate = {onClickUpdate}
				onClickDelete = {onClickDelete}
			/>
		</>
	);
}
export default ProfilePresenter;