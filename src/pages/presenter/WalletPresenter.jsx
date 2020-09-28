import React from 'react';
/* Importando componentes */
import Index from '../../Components/wallet/Index';

const WalletPresenter = ({wallet,onSubmit}) => {
	return (
		<>
			<Index
				wallet = {wallet}
				onSubmit = {onSubmit}
			/>
		</>
	);
};
export default WalletPresenter;