import React from 'react';
/* Importando componentes */
import Header from '../layout/Header';
import ShopListArticle from './ShopListArticle';
/* Importando estilos de css */
import '../../assets/css/main.css';

const index = ({ShopInformation}) => {  
  return (
    <>
    	<Header/>
    	<section className="container mt-5">
    		<div className="row">
    			<div className="col-md-8">
    				<div className="card">
    					<div className="card-header card-header-style bg-dark">    						
    						<span>Tienda venezuela</span>
    					</div>
    					<div className="card-body">
                            <ShopListArticle ShopInformation={ShopInformation}/>
    					</div>
    				</div>
    			</div>
    			<div className="col-md-4">
    			</div>
    		</div>    		
    	</section>
    </>
  )
}

export default index;