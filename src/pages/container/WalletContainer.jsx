import React, {useState} from 'react';
/* Importando componentes */
import WalletPresenter from '../presenter/WalletPresenter';

const WalletContainer = () => {
	const [wallet,setWallet] = useState([]);
	const [result, setResult] = useState(0);

	const resultOperation = (data) => {
		setResult(result + parseFloat(data.price));
	}

	const handleSubmit = (data,e) => {						
		resultOperation(data);
		let date = new Date();
		data.date = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
						    ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
		setWallet([
			...wallet,
			   data
		])
		e.target.reset();
	}

	return (
		<WalletPresenter
			wallet = {wallet}
			result = {result}
			onSubmit = {handleSubmit}				
		/>
	);
}
export default WalletContainer;