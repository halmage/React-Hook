import React from 'react';
/* Importando componentes */
import Header from '../layout/Header';
import ShopListArticle from './ShopListArticle';
import ShopTrolleyArticle from './ShopTrolleyArticle';
/* Importando estilos de css */
import '../../assets/css/main.css';

const index = ({ShopInformation,trolley,price,onClick,onClickDeleted}) => {  
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
                            <ShopListArticle 
                                onClick={onClick}
                                ShopInformation={ShopInformation}
                            />
    					</div>
    				</div>
    			</div>
    			<div className="col-md-4">
                    <ShopTrolleyArticle 
                        price={price}
                        trolley={trolley}
                        onClickDeleted={onClickDeleted}
                    />
    			</div>
    		</div>    		
    	</section>
    </>
  )
}

export default index;