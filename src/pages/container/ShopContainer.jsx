import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';
/* Importando componentes */
import ShopPresenter from '../presenter/ShopPresenter';
/* Importando información de json */
import ShopInformation from '../../assets/informations/ShopInformatión.json';

const ShopContainer = () => {
 
 const [trolley,setTrolley] = useState([]);
 const [price,setPrice] = useState(0);

 const handleClick = (data) => {
 	setPrice(price + parseFloat(data.price));
    data.id = uuidv4();
 	setTrolley([
 		...trolley,
 		data
 	]);
 }

 const handleClickDeleted = (data) =>{
    setPrice(price - parseFloat(data.price));   
    setTrolley(trolley.filter(t => t.id !== data.id)); 
 }

  return (
    <> 
    	<ShopPresenter 
    		price = {price}
    		trolley = {trolley}    		
    		onClick = {handleClick}
    		ShopInformation={ShopInformation}
            onClickDeleted = {handleClickDeleted}
    	/>
    </>
  )
}
export default ShopContainer;