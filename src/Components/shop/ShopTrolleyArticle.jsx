import React from 'react';
/* Importando componentes */
import ShopListTrolley from './ShopListTrolley';

const ShopTrolleyArticle = ({trolley,price,onClickDeleted}) => {
  return (
    <>
    	<div className="card">
            <div className="card-header card-header-style bg-dark">                         
            	<div className="row">
            		<div className="col-md-6">
		                <svg width="2em" height="2em" 
		                	 viewBox="0 0 16 16" className="bi bi-cart4" 
		                	 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		                  <path fill-rule="evenodd" 
		                  		d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>                                                                     
		                </svg>
		                <br/>
		                {trolley.length}
            		</div>
            		<div className="col-md-6">
            			<svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-cash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						  <path fill-rule="evenodd" d="M15 4H1v8h14V4zM1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1z"/>
						  <path d="M13 4a2 2 0 0 0 2 2V4h-2zM3 4a2 2 0 0 1-2 2V4h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 12a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
						</svg>
						<br/>
						{price}$
            		</div>
            	</div>
            </div>
            <div className="card-body">
                <ShopListTrolley 
                    trolley = {trolley}
                    onClickDeleted = {onClickDeleted}
                />
            </div>
        </div>
    </>
  )
}
export default ShopTrolleyArticle;