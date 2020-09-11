import React,{useState} from 'react';
/* Importando componentes */
import ProfilePresenter from '../presenter/ProfilePresenter';

const ProfileContainer = () => {
	const [data,setData] = useState({
			avatar:'',
			name:'',
			last_name:'',
			email:'',
			sex:'',
			city:'',
			content:''
		});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]:e.target.value
		})
	}

	return (
		<ProfilePresenter 
			data = {data} 
			onChange = {handleChange}
		/>
	);
}
export default ProfileContainer;