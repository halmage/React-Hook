import React from 'react';

const KanbanListTask = ({kanban}) => {
  return (
    <>
    	<div className="row">
	    	{
	    		kanban.map((k)=>{
	    			return(
	    				<div className="col-md-6">
		    				<div className="card">
		    					<div className="card-header bg-dark text-light text-center">
		    						<span>{k.title}</span>
		    					</div>
		    					<div className="card-body">
		    						<p><b>Contenido:</b> {k.content}</p>
		    						<p><b>Prioridad:</b> 
		    						<span 
			    						className= {k.priority === 'bajo' ? 'badge badge-danger'
			    								   :k.priority === 'medio' ? 'badge badge-warning' 
			    								   : 'badge badge-primary'}
									>
		    							{k.priority}
		    						</span>
		    						</p>
		    						<p><b>Autor:</b> {k.user}</p>
		    					</div>
		    				</div>
	    				</div>
	    			)
	    		})
	    	}
	    </div>
    </>
  )
}

export default KanbanListTask;