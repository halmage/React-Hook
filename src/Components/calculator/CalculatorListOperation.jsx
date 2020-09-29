import React from 'react';
const CalculatorListOperation = ({math}) => {
  return (
    <>
    	{
			math.map((m) => {	
				return(
					<>					
						<tr>
							<td>{m.number1}</td>
							<td>{m.signo}</td>
							<td>{m.number2}</td>
							<td>{m.result}</td>
						</tr>
					</>
				)
			})													
		}
    </>
  )
}
export default CalculatorListOperation;