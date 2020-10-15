import React from 'react';

const KanbanListTask = ({kanban,onClickDelete,editKanban}) => {
  return (
    <>
    	<div className="row">
	    	{
	    		kanban.map((k)=>{
	    			return(
	    				<div className="col-md-6">
		    				<div className="card mt-2">
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
		    					<div className="card-footer">
		    						<div className="d-flex justify-content-center">
		    							<button className="btn btn-warning mx-2" onClick={()=>editKanban(k)}>actualizar</button>
		    							<button className="btn btn-danger" onClick={()=>onClickDelete(k)}>eliminar</button>
		    						</div>
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