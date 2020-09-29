import React from 'react';
/* Impartando compentes */
import Header from '../layout/Header';
import ProfileAddForm from './ProfileAddForm';
import ProfileEditForm from './ProfileEditForm';
import ProfileListCard from './ProfileListCard';
/* Importando estilos de css */
import '../../assets/css/main.css';

const Index = ({users,editing,currentUser,editUser,onAddSubmit,onUpdateSubmit,onClickDelete}) => {	
	return (
		<>
			<Header/>
			<section className="container p-5">
				<div className="row">
					<div className="col-md-12 d-flex justify-content-center">		
						<div className="col-md-7">
						{
							editing ? (
								<>
									<ProfileEditForm currentUser = {currentUser}
												 	 onUpdateSubmit = {onUpdateSubmit}							
									/>
								</>
								): (
								<>
									<div className="card">
										<div className="card-header bg-dark text-light">
											<h2 className="lead">Formulario de perfil</h2>
										</div>
										<div className="card-body">
											<ProfileAddForm onAddSubmit = {onAddSubmit}/>
										</div>
									</div>
								</>
							)
							
						}
						</div>
					</div>														
				</div>
				<div className="row mt-5">
						<ProfileListCard users = {users}
										 editUser = {editUser}
										 onClickDelete = {onClickDelete}
						/>
				</div>
			</section>
		</>
	);
}
export default Index;