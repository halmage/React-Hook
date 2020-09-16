import React from 'react';
/* Impartando compentes */
import Header from '../header/Header';
import ProfileForm from './ProfileForm';
import ProfileListCard from './ProfileListCard';

const Index = ({onSubmit, data}) => {

	return (
		<>
			<Header/>
			<section className="container mt-5">
				<div className="row">
					<div className="col-md-12 d-flex justify-content-center">		
						<div className="col-md-7">
							<ProfileForm data = {data} 
										 onSubmit = {onSubmit}
							/>
						</div>
					</div>														
				</div>
				<div className="row">
					<div className="col-md-6 mt-5">
						<ProfileListCard data = {data}/>
					</div>

				</div>
			</section>
		</>
	);
}
export default Index;