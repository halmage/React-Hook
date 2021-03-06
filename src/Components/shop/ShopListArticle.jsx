import React from 'react';

const ShopListArticle = ({ShopInformation,onClick}) => {
  return (
	   <>	
	   		{
	   			ShopInformation.shop.map((shop,i) => {
	   				return(	   					
   						<div key={i} className="card col-md-6 my-2" style={{display: 'inline-block'}}>
   							<img src={shop.image} className="card-image-style" alt={shop.image}/>
   							<div className="card-body">   								
								<p>{shop.title} {shop.price} <span className="text-success">$</span></p>
								<p>{shop.content}</p>   
								<button className="btn btn-block btn-outline-dark text-uppercase" onClick={() => onClick(shop)}>									
									<svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-cart4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									  <path fill-rule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>									  									
									</svg>																		
								</button>
   							</div>
   						</div>
	   				)
	   			})
	   		}
	   </>
  )
}

export default ShopListArticle;