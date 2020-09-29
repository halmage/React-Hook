import React from 'react';
/* Importando componentes */
import Index from '../../Components/shop/Index';

const ShopPresenter = ({ShopInformation}) => {
  return (
    <>
    	<Index ShopInformation = {ShopInformation}/>
    </>
  )
}
export default ShopPresenter;