import React from 'react';

const EmailConversation = ({email,emailInformation}) => {
  console.log(emailInformation.email.find((element) => element.id === 3));
  return (
    <>
    	<div className="card">    		
	    	<div className="card-header bg-dark text-light text-center">    
	    		<span className="text-uppercase">Conversaciones</span>		
	    	</div>
	    	<div className="card-body">	    		
	    		{	    			
	    			email.map((e) => {	    	

	    				return(
	    					<>
	    					{console.log(emailInformation.email.find((element) => element.id === parseFloat(e.from) ))}			
					    		<div className="row">
					    			<div className="col-md-4">
					    				<img src={emailInformation.email.find((element) => element.id === parseFloat(e.to)).avatar} className="mt-2 rounded-circle mr-1 float-left" width = '60' height = '60'/>
					    				<p className="text-uppercase mt-3">{emailInformation.email.find((element) => element.id === parseFloat(e.to)).name} {emailInformation.email.find((element) => element.id === parseFloat(e.to)).last_name}</p>
					    				<br/>
					    				<img src="./images/perfil/image-1.jpg" className="mt-2 rounded-circle mr-1 float-left" width = '60' height = '60'/>
					    				<p className="text-uppercase mt-3">casanova fortuna</p>
					    			</div>
					    			<div className="col-md-8">
					    				<div className="shadow p-4">
					    					<p>
					    						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
												tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
												quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
												consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
												cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
												proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					    					</p>
					    				</div>
					    			</div>
					    		</div>	
					    	</>				    		
			    	)})
	    		}
	    	</div>
    	</div>
    </>
  )
}

export default EmailConversation;