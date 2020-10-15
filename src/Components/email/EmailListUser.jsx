import React from 'react';

const EmailListUser = ({emailInformation}) => {
  return (
    <>
    	{
			emailInformation.email.map((e) => {
				return(
					<>
						<option value={e.id}>{e.name} {e.last_name}</option>
					</>
				)
			})
		}
    </>
  )
}

export default EmailListUser;