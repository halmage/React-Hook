import React from 'react';
/* Importando componentes */
import Index from '../../Components/profile/Index';
const ProfilePresenter = ({users,editing,currentUser,editUser,onAddSubmit,onUpdateSubmit,onClickDelete}) => {
	return(
		<>
			<Index 
				users = {users} 
				editing = {editing}
				editUser = {editUser}
				currentUser = {currentUser}
				onAddSubmit = {onAddSubmit}
				onUpdateSubmit = {onUpdateSubmit}
				onClickDelete = {onClickDelete}
			/>
		</>
	);
}
export default ProfilePresenter;