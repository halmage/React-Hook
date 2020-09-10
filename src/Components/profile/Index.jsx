import React from 'react';
/* Impartando compentes */
import Header from '../header/Header';
import ProfileCard from './ProfileCard';
import ProfileForm from './ProfileForm';

const Index = (props) => {
	const {onChange} = props;
	return (
		<>
			<Header/>
			<section className="container mt-5">
				<div className="row">
					<div className="col-md-5">
						<ProfileCard/>
					</div>
					<div className="col-md-7">
						<ProfileForm onChange = {onChange} />
					</div>
				</div>
			</section>
		</>
	);
}
export default Index;