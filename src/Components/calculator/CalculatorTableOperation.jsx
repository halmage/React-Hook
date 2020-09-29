import React from 'react';
/* Importando componentes */
import CalculatorListOperation from './CalculatorListOperation';

const CalculatorTableOperation = ({math}) => {
  return (
    <>
    	<table class="table table-striped text-center">
			<thead>
				<tr>
					<th>numero1</th>
					<th>operación</th>
					<th>numero2</th>
					<th>resultado</th>
				</tr>
			</thead>
			<tbody>
				<CalculatorListOperation math = {math}/>
			</tbody>
		</table>
    </>
  )
}
export default CalculatorTableOperation;
