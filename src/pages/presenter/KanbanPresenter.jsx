import React from 'react';
/* Importando componentes */
import Index from '../../Components/kanban/Index';

const KanbanPresenter = ({onSubmit,kanban}) => {
  return (
    <>
    	<Index
    		kanban={kanban}
    		onSubmit={onSubmit}    		
    	/>
    </>
  )
}
export default KanbanPresenter;