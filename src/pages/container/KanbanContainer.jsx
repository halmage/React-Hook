import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';
/* Importando componentes */
import KanbanPresenter from '../presenter/KanbanPresenter';

const KanbanContainer = () => {
  const [kanban,setKanban] = useState([]);
  const [editing,setEditing] = useState(false);
  const [currentKanban,setCurrentKanban] = useState({
    id:'', title:'', content:'', priority:'', user:'' 
  });

  const handleSubmit = (data,e) => {
      data.id = uuidv4();
      setKanban([
        ...kanban,
        data
      ]);
      e.target.reset();
  }

  const editKanban = (kanban) => {
    setEditing(true);
    setCurrentKanban({
      id: kanban.id, title:kanban.title, content:kanban.content, priority:kanban.priority, user:kanban.user 
    })
  }

  const updateKanban = (id,data) => {
    setEditing(false);
    setKanban(kanban.map(k => k.id === id ? data : kanban));
  }

  const handleUpdateSubmit = (data) => {
    data.id = currentKanban.id;
    updateKanban(currentKanban.id,data);
  }  

  const handleClickDeleted = (data) => {
    setKanban(kanban.filter(k => k.id !== data.id)); 
  }

  return (
    <>
   		<KanbanPresenter
        kanban={kanban} 
        editing={editing}
        editKanban={editKanban}
   			onSubmit={handleSubmit}
        currentKanban={currentKanban}
        onSubmitUpdate={handleUpdateSubmit}
        onSubmitDeleted = {handleClickDeleted}
   		/>
    </>
  )
}
export default KanbanContainer;