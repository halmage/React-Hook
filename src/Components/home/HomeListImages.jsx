import React from 'react';

const HomeListImages = (props) => {
	return(
		<>
			{
		        props.data.map((d, i) => {
		             return(
		             	<figure key={i} className="text-center" style={{display: 'inline-block'}} >
		             		<img  src={d.image} className="ml-5 mt-5 home-image-style" alt={d.title}/>
		             		<figcaption>{d.title}</figcaption>
		             	</figure>
		             )
		        })
			}
		</>
	);
}
export default HomeListImages;