import React from 'react';

const ShopListArticle = ({ShopInformation}) => {
  console.log(ShopInformation);
  return (
	   <>	
	   		{
	   			ShopInformation.shop.map((shop) => {
	   				return(	   					
   						<div className="card col-md-6" style={{display: 'inline-block'}}>
   							<img src={shop.image} className="card-image-style"/>
   							<div className="card-body">   								
								<p>{shop.title} {shop.price} <span className="text-success">$</span></p>
								<p>{shop.content}</p>   									
   							</div>
   						</div>
	   				)
	   			})
	   		}
	   </>
  )
}

export default ShopListArticle;