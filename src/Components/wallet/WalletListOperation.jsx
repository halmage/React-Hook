import React from 'react';

const WalletListOperation = ({wallet}) => {
  return (
  	wallet.map((w)=>{
  		return(
  			<>
	  			<tr>
			      <th><span className={w.price > 0 ? "text-success" : "text-danger"}>{w.price > 0 ? '+' : '-'}</span></th>
			      <td>{w.item}</td>
			      <td><span className={w.price > 0 ? "text-success" : "text-danger"}>{w.price}$</span></td>
			    </tr>
			</>
  		)
  	})		
  )
}

export default WalletListOperation;