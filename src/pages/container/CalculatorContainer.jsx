import React,{useState} from 'react';
/* Importando componentes */
import CalculatorPresenter from '../presenter/CalculatorPresenter';

const CalculatorContainer = () => {

  const [math,setMath] = useState([]);

  const mathOperation = (data) => {
  		switch (data.operation) {
  			case '1':
  				data.result = parseFloat(data.number1) + parseFloat(data.number2);
          data.signo = '+';
          return(data);
  					break;
  			case '2':
  				  data.result = parseFloat(data.number1) - parseFloat(data.number2);
            data.signo = '-';
            return(data);
  					 break;
  			case '3':
  				data.result = parseFloat(data.number1) * parseFloat(data.number2);
          data.signo = '*';
          return(data);
  					break;
  			case '4':
  				if(data.number2 > 0){
  					data.result =  parseFloat(data.number1) / parseFloat(data.number2);
            data.signo = '/';
            return(data);
  				}
  				return("Intento fallido");
  					break;
  			default:
  				return("Intento fallido");
  					break;
  		}
  }

  const handleSubmit = (data,e) => {
  		data = mathOperation(data);
	  	setMath([
	  		...math,
	  		data
	  	]);
	  	e.target.reset();
  }

  return (
    <>    	
    	<CalculatorPresenter
    		math = {math}
    		onSubmit = {handleSubmit}
    	/>
    </>
  )
}
export default CalculatorContainer;