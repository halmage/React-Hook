import React from 'react';
/* Importando componentes */
import Header from '../layout/Header';
import WalletForm from './WalletForm';
import WalletResultOperation from './WalletResultOperation';
import WalletTableOperation from './WalletTableOperation';

const Index = ({wallet,onSubmit}) => {
	return (
		<>
			<Header/>		
			<section className="container mt-5">
				<WalletResultOperation/>
				<WalletForm onSubmit = {onSubmit}/>	
				<WalletTableOperation wallet = {wallet}/>
			</section>
		</>
	)
}
export default Index;