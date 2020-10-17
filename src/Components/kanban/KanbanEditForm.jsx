import React from 'react';
import {useForm} from 'react-hook-form';

const KanbanEditForm = ({currentKanban,onUpdateSubmit}) => {
  const {register, errors, handleSubmit,setValue} = useForm({
		defaultValues: currentKanban
  });

  setValue('id', currentKanban.id);
  setValue('title', currentKanban.title);
  setValue('content', currentKanban.content);
  setValue('priority', currentKanban.priority);
  setValue('user', currentKanban.user);

  return (
    <>
    	<div className="card">
    		<div className="card-header bg-dark text-light text-center">
    			<span className="text-uppercase">formulario de kanban</span>
    		</div>
    		<div className="card-body">
		    	<form onSubmit={handleSubmit(onUpdateSubmit)}>
				  <div className="form-group">
				    <label>Ingrese titulo</label>
				    <input type="text" 
				    	   className="form-control" 
				    	   id="title" 
				    	   name="title"
				    	   placeholder="Ingrese titulo"
				    	   ref={
		                        register({
		                            required: {value:true, message: 'Ingrese titulo'}
		                        })
			                }
				   	/>
				   	<span className="text-danger text-small d-block mb-2">
			        	{errors?.title?.message}
			    	</span>
				  </div>
				  <div className="form-group">
				    <label>Ingrese contenido</label>
				    <input type="text" 
				    	   className="form-control" 
				    	   id="content" 
				    	   name="content"
				    	   placeholder="Ingrese contenido"
				    	   ref={
		                        register({
		                            required: {value:true, message: 'Ingrese contenido'}
		                        })
			                }
				    />
				    <span className="text-danger text-small d-block mb-2">
			        	{errors?.content?.message}
			    	</span>
				  </div>
				  <div className="form-group">
				    <label>Selecciona prioridad</label>
				    <select className="form-control" 
				    		id="priority" 
				    	   	name="priority"
				    	   	ref={
		                        register({
		                            required: {value:true, message: 'Ingrese contenido'}
		                        })
			                }
				    >
				    	<option value="">-- Ingrese prioridad --</option>
				    	<option value="bajo">bajo</option>
				    	<option value="medio">medio</option>
				    	<option value="alto">alto</option>
				    </select>
				    <span className="text-danger text-small d-block mb-2">
			        	{errors?.priority?.message}
			    	</span>
				  </div>
				  <div className="form-group">
				    <label>Ingrese usuario</label>
				    <input type="text" 
				    	   className="form-control" 
				    	   id="user" 
				    	   name="user" 
				    	   placeholder="Ingrese usuario"
				    	   ref={
		                        register({
		                            required: {value:true, message: 'Ingrese usuario'}
		                        })
			                }
				    />
				    <span className="text-danger text-small d-block mb-2">
			        	{errors?.user?.message}
			    	</span>
				  </div>
				  <div>
				  	<button type="submit" className="btn btn-block btn-dark">actualizar</button>
				  </div>
				</form>
    		</div>
    	</div>
    </>
  )
}
export default KanbanEditForm;