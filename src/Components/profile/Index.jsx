import React from 'react';
/* Impartando compentes */
import Header from '../header/Header';
import ProfileForm from './ProfileForm';
import ProfileListCard from './ProfileListCard';

const Index = ({data, onSubmit, onClickUpdate, onClickDelete}) => {
	return (
		<>
			<Header/>
			<section className="container p-5">
				<div className="row">
					<div className="col-md-12 d-flex justify-content-center">		
						<div className="col-md-7">
							<ProfileForm data = {data} 
										 onSubmit = {onSubmit}
							/>
						</div>
					</div>														
				</div>
				<div className="row mt-5">
						<ProfileListCard data = {data}
										 onClickUpdate = {onClickUpdate} 
										 onClickDelete = {onClickDelete}
						/>
				</div>
			</section>
		</>
	);
}
export default Index;