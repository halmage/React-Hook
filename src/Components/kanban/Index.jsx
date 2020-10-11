import React from 'react';
/* Importando componentes */
import Header from '../layout/Header';
import KanbanForm from './KanbanForm';
import KanbanFormEdit from './KanbanFormEdit';
import KanbanListTask from './KanbanListTask';

const Index = ({onSubmit,onSubmitDeleted,kanban,editing,editKanban,currentKanban,onSubmitUpdate}) => {
  return (
    <>
    	<Header/>
    	<section className="container mt-5">
    		<div className="row">
    			<div className="col-md-4">
                    {
                        editing ? (
                            <>
                                <KanbanFormEdit 
                                    currentKanban = {currentKanban} 
                                    onSubmitUpdate = {onSubmitUpdate}
                                />
                            </>
                        ):(
                            <>
    				            <KanbanForm onSubmit={onSubmit}/>
                            </>
                        )
                    }
    			</div>
    			<div className="col-md-8">
                    <KanbanListTask 
                        kanban={kanban}
                        editKanban = {editKanban}
                        onSubmitDeleted={onSubmitDeleted}
                    />
    			</div>
    		</div>
    	</section>
    </>
  )
}
export default Index;