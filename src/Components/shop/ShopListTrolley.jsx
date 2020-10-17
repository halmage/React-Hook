import React from 'react';

const ShopListTrolley = ({trolley,onClickDeleted}) => {
  return (
    <>
    	<ul className="list-group">
    		{
    			trolley.map((t,i) => {
    				return(
    					<li key={i} className="list-group-item">
    						<img src={t.image} width = '50' height = '50' className="float-left mr-2" alt={t.image}/>
    						<span className="mt-5"> 
    							{t.title} <span className="text-success">{t.price}$</span>
                                <button className="btn btn-outline-danger ml-2" onClick={()=>onClickDeleted(t)}>
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