import React from 'react';
/* Importando componentes */
import Index from '../../Components/kanban/Index';

const KanbanPresenter = ({kanban, editing, onSubmit, editKanban, currentKanban, onSubmitUpdate, onSubmitDeleted}) => {
  return (
    <>
    	<Index
    		kanban={kanban} 
        	editing={editing}
   			onSubmit={onSubmit}
	        editKanban={editKanban}
	        currentKanban={currentKanban}
	        onSubmitUpdate={onSubmitUpdate}
	        onSubmitDeleted = {onSubmitDeleted}	
    	/>
    </>
  )
}
export default KanbanPresenter;