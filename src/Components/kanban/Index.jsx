import React from 'react';
/* Importando componentes */
import Header from '../layout/Header';
import KanbanAddForm from './KanbanAddForm';
import KanbanEditForm from './KanbanEditForm';
import KanbanListTask from './KanbanListTask';

/* Importando estilos de css */
import '../../assets/css/main.css';

const Index = ({kanban,editing,currentKanban,editKanban,onAddSubmit,onUpdateSubmit,onClickDelete}) => {
  return (
    <>
    	<Header/>
    	<section className="container mt-5">
    		<div className="row">
    			<div className="col-md-4">
                    {
                        editing ? (
                            <>
                                <KanbanEditForm 
                                    currentKanban = {currentKanban} 
                                    onUpdateSubmit = {onUpdateSubmit}
                                />
                            </>
                        ):(
                            <>
    				            <KanbanAddForm onAddSubmit={onAddSubmit}/>
                            </>
                        )
                    }
    			</div>
    			<div className="col-md-8">
                    <KanbanListTask 
                        kanban={kanban}
                        editKanban = {editKanban}
                        onClickDelete={onClickDelete}
                    />
    			</div>
    		</div>
    	</section>
    </>
  )
}
export default Index;