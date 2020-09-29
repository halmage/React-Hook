import React from 'react';
/* Importando componentes */
import ShopPresenter from '../presenter/ShopPresenter';
/* Importando información de json */
import ShopInformation from '../../assets/informations/ShopInformatión.json';

const ShopContainer = () => {
  return (
    <> 
    	<ShopPresenter ShopInformation={ShopInformation}/>
    </>
  )
}
export default ShopContainer;