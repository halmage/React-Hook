import React from 'react';
/* Importando componentes */
import WalletListOperation from './WalletListOperation';

const WalletTableOperation = ({wallet}) => {
  return (
    <>
   		<table class="table table-striped text-center">
		  <thead>
		    <tr>
		      <th scope="col">operación</th>
		      <th scope="col">articulo</th>
		      <th scope="col">precio</th>
		    </tr>
		  </thead>
		  <tbody>
		  <WalletListOperation
		  	wallet = {wallet}
		  />
		  </tbody>
		</table>
    </>
  )
}

export default WalletTableOperation;