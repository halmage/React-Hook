import React from 'react';
/* Importando componentes */
import Index from '../../Components/kanban/Index';

const KanbanPresenter = ({kanban, editing, onAddSubmit, editKanban, currentKanban, onUpdateSubmit, onClickDelete}) => {
  return (
    <>
    	<Index
    		  kanban={kanban} 
        	editing={editing}
	        editKanban={editKanban}
   			  onAddSubmit={onAddSubmit}
	        currentKanban={currentKanban}
	        onUpdateSubmit={onUpdateSubmit}
	        onClickDelete = {onClickDelete}	
    	/>
    </>
  )
}
export default KanbanPresenter;