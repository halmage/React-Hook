import React,{useState} from 'react';
/* Importando componentes */
import CalculatorPresenter from '../presenter/CalculatorPresenter';

const CalculatorContainer = () => {

  const [math,setMath] = useState([]); 

  const handleSubmit = (data,e) => {
  		
      switch (data.operation) {
        case '1':
          data.result = parseFloat(data.number1) + parseFloat(data.number2);
          data.signo = '+';
            break;
        case '2':
            data.result = parseFloat(data.number1) - parseFloat(data.number2);
            data.signo = '-';
             break;
        case '3':
          data.result = parseFloat(data.number1) * parseFloat(data.number2);
          data.signo = '*';
            break;
        case '4':
          if(data.number2 > 0){
            data.result =  parseFloat(data.number1) / parseFloat(data.number2);
            data.signo = '/';
          }
          data.signo = '/';
          data.result = "Intento fallido";
            break;
        default:
          data = "Intento fallido";
            break;
      }

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