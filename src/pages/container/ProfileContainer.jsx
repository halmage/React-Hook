import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';
/* Importando componentes */
import ProfilePresenter from '../presenter/ProfilePresenter';


const ProfileContainer = () => {
	const [users,setUsers] = useState([]);
	const [editing,setEditing] = useState(false);
	const [editUser,setEditUser] = useState({
		id: null, avatar: '', name: '', last_name: '',
		email: '', sex: '', city: '', content: ''
	});

	const updatedUser = (user) => {
		console.log(user);
		setEditing(true);
		setEditUser({
			id: user.id, avatar: user.avatar, name: user.name, 
			last_name: user.last_name, email: user.email, sex: user.sex, 
			city: user.city, content: user.content	
		})
	}
		
	const handleAddSubmit = (data,e) => {
		data.id = uuidv4();
		setUsers([
			...users,
				data
		]);
		e.target.reset();
	}

	const handleEditSubmit = (data) => {
		setEditing(false);
		console.log(data.id);
		setUsers(users.map(user => (user.id === data.id ? data : user)));
	}

	const handleClickDelete = (id) => {	
		setUsers(users.filter(user => user.id !== id));
	}

	return (
		<ProfilePresenter
			data = {users}		
			editing = {editing}	
			editUser = {editUser}
			updatedUser = {updatedUser}
			onAddSubmit = {handleAddSubmit}
			onEditSubmit = {handleEditSubmit}
			onClickDelete = {handleClickDelete}
		/>
	);
}
export default ProfileContainer;
