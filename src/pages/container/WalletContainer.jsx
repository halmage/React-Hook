import React, {useState} from 'react';
/* Importando componentes */
import WalletPresenter from '../presenter/WalletPresenter';

const WalletContainer = () => {
	const [wallet,setWallet] = useState([]);
	const handleSubmit = (data,e) => {
		console.log(data);
		setWallet([
			...wallet,
			   data
		])
		e.target.reset();
	}

	return (
		<WalletPresenter
			wallet = {wallet}
			onSubmit = {handleSubmit}				
		/>
	);
}
export default WalletContainer;