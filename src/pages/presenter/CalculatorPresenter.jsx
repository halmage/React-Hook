import React from 'react';
/* Importando componentes */
import Index from '../../Components/calculator/Index';

const CalculatorPresenter = ({onSubmit,math}) => {
  return (
    <>
    	<Index onSubmit = {onSubmit}
    		   math = {math}
    	/>
    </>
  )
}
export default CalculatorPresenter;