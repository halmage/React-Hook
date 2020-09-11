import React from 'react';
/* Impartando compentes */
import Header from '../header/Header';
import ProfileCard from './ProfileCard';
import ProfileForm from './ProfileForm';

const Index = ({onChange, data}) => {
	console.log(data);
	return (
		<>
			<Header/>
			<section className="container mt-5">
				<div className="row">
					<div className="col-md-5">
						<ProfileCard data = {data}/>
					</div>
					<div className="col-md-7">
						<ProfileForm data = {data} onChange = {onChange} />
					</div>
				</div>
			</section>
		</>
	);
}
export default Index;