import React from 'react';

const EmailListUser = ({emailInformation}) => {
  return (
    <>
    	{
			emailInformation.email.map((e,i) => {
				return(
					<>
						<option key={i} value={e.id}>{e.name} {e.last_name}</option>
					</>
				)
			})
		}
    </>
  )
}

export default EmailListUser;