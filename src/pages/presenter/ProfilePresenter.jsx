import React from 'react';
/* Importando componentes */
import Index from '../../Components/profile/Index';
const ProfilePresenter = ({data,editing,editUser,updatedUser,onAddSubmit,onEditSubmit,onClickDelete}) => {
	return(
		<>
			<Index 
				data = {data} 
				editing = {editing}
				editUser = {editUser}
				updatedUser = {updatedUser}
				onAddSubmit = {onAddSubmit}
				onEditSubmit = {onEditSubmit}
				onClickDelete = {onClickDelete}
			/>
		</>
	);
}
export default ProfilePresenter;