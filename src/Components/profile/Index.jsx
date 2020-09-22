import React from 'react';
/* Impartando compentes */
import Header from '../header/Header';
import ProfileAddForm from './ProfileAddForm';
import ProfileEditForm from './ProfileEditForm';
import ProfileListCard from './ProfileListCard';

const Index = ({data,editing,editUser,updatedUser,onAddSubmit,onEditSubmit,onClickDelete}) => {	
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
							<ProfileEditForm 
											 editUser = {editUser}
										 	 onEditSubmit = {onEditSubmit}							
							/>
							</>
							): (
							<>
							<ProfileAddForm data = {data} 
										 onAddSubmit = {onAddSubmit}
							/>
							</>
							)
							
						}
						</div>
					</div>														
				</div>
				<div className="row mt-5">
						<ProfileListCard data = {data}
										 updatedUser = {updatedUser}
										 onClickDelete = {onClickDelete}
						/>
				</div>
			</section>
		</>
	);
}
export default Index;