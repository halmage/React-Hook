import React from 'react';
/* Importando componentes */
import Header from '../layout/Header';
import KanbanForm from './KanbanForm';
import KanbanListTask from './KanbanListTask';

const Index = ({onSubmit,kanban}) => {
  return (
    <>
    	<Header/>
    	<section className="container mt-5">
    		<div className="row">
    			<div className="col-md-4">
    				<KanbanForm onSubmit={onSubmit}/>
    			</div>
    			<div className="col-md-8">
                    <KanbanListTask kanban={kanban}/>
    			</div>
    		</div>
    	</section>
    </>
  )
}
export default Index;