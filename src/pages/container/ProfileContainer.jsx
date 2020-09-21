import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';
/* Importando componentes */
import ProfilePresenter from '../presenter/ProfilePresenter';


const ProfileContainer = () => {
	const [users,setUsers] = useState([]);
		
	const handleSubmit = (data,e) => {
		data.id = uuidv4();
		setUsers([
			...users,
				data
		]);
		e.target.reset();
	}

	const handleClickUpdate = (id) => {
		console.log(id);
	}

	const handleClickDelete = (id) => {			
		console.log(id);
		setUsers(users.filter(user => user.id !== id));
	}

	return (
		<ProfilePresenter
			data = {users}			
			onSubmit = {handleSubmit}
			onClickUpdate = {handleClickUpdate}
			onClickDelete = {handleClickDelete}
		/>
	);
}
export default ProfileContainer;
