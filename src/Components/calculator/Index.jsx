import React from 'react';
/* Importando componentes */
import Header from '../layout/Header';
import CalculatorForm from './CalculatorForm';
import CalculatorTableOperation from './CalculatorTableOperation';
/* Importando estilos de css */
import '../../assets/css/main.css';

const Index = ({onSubmit,math}) => {
  return (
    <>
    	<Header/>
    	<section className="container mt-5">
    		<div className="row">
    			<div className="col-md-6">    	
    				<CalculatorTableOperation math = {math}/>		
    			</div>	
    			<div className="col-md-6">    			
    				<CalculatorForm onSubmit = {onSubmit}/>
    			</div>
    		</div>
    	</section>
    </>
  )
}

export default Index;