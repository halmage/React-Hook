import React from 'react';
/* Importando componentes */
import Index from '../../Components/shop/Index';

const ShopPresenter = ({ShopInformation,trolley,price,onClick,onClickDeleted}) => {
  return (
    <>
    	<Index 
    		trolley = {trolley}
    		price = {price}
    		onClick = {onClick}
            onClickDeleted = {onClickDeleted}
    		ShopInformation = {ShopInformation}
    	/>
    </>
  )
}
export default ShopPresenter;