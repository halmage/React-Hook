import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';
/* Importando componentes */
import KanbanPresenter from '../presenter/KanbanPresenter';

const KanbanContainer = () => {
  const [kanban,setKanban] = useState([]);
  const handleSubmit = (data,e) => {
  	  data.id = uuidv4();
  	  setKanban([
  	  	...kanban,
  	  	data
  	  ]);
  	  e.target.reset();
  }
  return (
    <>
   		<KanbanPresenter
        kanban={kanban} 
   			onSubmit={handleSubmit}
   		/>
    </>
  )
}
export default KanbanContainer;