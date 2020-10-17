import React from 'react';

const WalletListOperation = ({wallet}) => {
  return (
  	wallet.map((w,i)=>{
  		return(
  			<>
	  			<tr>
			      <th><span className={w.price > 0 ? "text-success" : "text-danger"}>{w.price > 0 ? '+' : '-'}</span></th>
			      <td><span className={w.price > 0 ? "text-success" : "text-danger"}>{w.item}</span></td>
			      <td><span className={w.price > 0 ? "text-success" : "text-danger"}>{w.price}$</span></td>
            <td><span className={w.price > 0 ? "text-success" : "text-danger"}>{w.date}</span></td>
			    </tr>
			</>
  		)
  	})		
  )
}

export default WalletListOperation;