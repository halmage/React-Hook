import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';
/* Importando componentes */
import ProfilePresenter from '../presenter/ProfilePresenter';

const ProfileContainer = () => {
	const [users,setUsers] = useState([]);
	const [editing,setEditing] = useState(false);
	const [currentUser,setCurrentUser] = useState({
		id: '', avatar: '', name: '', last_name: '',
		email: '', sex: '', city: '', content: ''
	});

	const handleAddSubmit = (data,e) => {
		data.id = uuidv4();
		setUsers([
			...users,
				data
		]);
		e.target.reset();
	}

	const editUser = (user) => {
		setEditing(true);
		setCurrentUser({
			id: user.id, avatar: user.avatar, name: user.name, 
			last_name: user.last_name, email: user.email, sex: user.sex, 
			city: user.city, content: user.content	
		})
	}	
	
	const updateUser = (id,data) => {
		console.log(data);
    	console.log(id);
		setEditing(false);
		setUsers(users.map(user => user.id === id ? data : user));
	}

	const handleUpdateSubmit = (data) => {
		data.id = currentUser.id;
		updateUser(currentUser.id,data);
	}

	const handleClickDelete = (id) => {	
		setUsers(users.filter(user => user.id !== id));
	}

	return (
		<ProfilePresenter
			users = {users}		
			editing = {editing}	
			editUser = {editUser}
			currentUser = {currentUser}
			onAddSubmit = {handleAddSubmit}
			onClickDelete = {handleClickDelete}
			onUpdateSubmit = {handleUpdateSubmit}
		/>
	);
}
export default ProfileContainer;
