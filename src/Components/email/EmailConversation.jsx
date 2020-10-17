import React from 'react';

const EmailConversation = ({email,emailInformation}) => {
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
					    		<div key={e.id} className="row my-2">
					    			<div className="col-md-4">
					    				<img src={emailInformation.email.find((element) => element.id === parseFloat(e.to)).avatar} className="mt-2 rounded-circle mr-1 float-left" width = '60' height = '60'/>
					    				<p className="text-uppercase mt-3">{emailInformation.email.find((element) => element.id === parseFloat(e.to)).name} {emailInformation.email.find((element) => element.id === parseFloat(e.to)).last_name}</p>
					    				<br/>
					    				<img src={emailInformation.email.find((element) => element.id === parseFloat(e.from)).avatar} className="mt-2 rounded-circle mr-1 float-left" width = '60' height = '60'/>
					    				<p className="text-uppercase mt-3">{emailInformation.email.find((element) => element.id === parseFloat(e.from)).name} {emailInformation.email.find((element) => element.id === parseFloat(e.from)).last_name}</p>
					    			</div>
					    			<div className="col-md-8">
					    				<div className="shadow p-4">
					    					<p>
					    						{e.message}
					    					</p>
					    				</div>
					    			</div>
					    		</div>	
					    		<hr/>
					    	</>				    		
			    	)})
	    		}
	    	</div>
    	</div>
    </>
  )
}

export default EmailConversation;