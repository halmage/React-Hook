import React from 'react';
/* Importando componentes */
import Index from '../../Components/wallet/Index';

const WalletPresenter = ({wallet,trolley,result,onSubmit}) => {
	return (
		<>
			<Index
				wallet = {wallet}
				result = {result}
				onSubmit = {onSubmit}
			/>
		</>
	);
};
export default WalletPresenter;