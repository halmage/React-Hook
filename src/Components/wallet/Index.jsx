import React from 'react';
/* Importando componentes */
import Header from '../layout/Header';
import WalletForm from './WalletForm';
import WalletResultOperation from './WalletResultOperation';
import WalletTableOperation from './WalletTableOperation';

const Index = ({wallet,result,onSubmit}) => {
	return (
		<>
			<Header/>		
			<section className="container mt-5">
				<div className="card">
					<div className="card-header card-header-style bg-dark">
						<span>Billetera </span>
					</div>
					<div className="card-body">
						<WalletResultOperation result = {result}/>
						<WalletForm onSubmit = {onSubmit}/>	
						{ 
						  wallet.length > 0 ? 
						  <WalletTableOperation wallet = {wallet}/>:
						  <h1 className="text-center text-danger mt-3">No se ha hecho ninguna operación</h1>
						}				
					</div>
				</div>
			</section>
		</>
	)
}
export default Index;