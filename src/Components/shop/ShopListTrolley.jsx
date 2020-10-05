import React from 'react';

const ShopListTrolley = ({trolley,onClickDeleted}) => {
  return (
    <>
    	<ul class="list-group">
    		{
    			trolley.map((t) => {
    				return(
    					<li class="list-group-item">
    						<img src={t.image} width = '50' height = '50' className="float-left mr-2"/>
    						<span className="mt-5"> 
    							{t.title} <span className="text-success">{t.price}$</span>
                                <button class="btn btn-outline-danger ml-2" onClick={()=>onClickDeleted(t)}>
                                &times;
                                </button>
    						</span>
    					</li>
    				)
    			})
    		}
		</ul>
    </>
  )
}
export default ShopListTrolley;