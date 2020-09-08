import React from 'react';
/* Importando estilos de css */
import './Home.css';

const HomeListImages = (props) => {
	return(
		<>
			{
		        props.data.map((d, i) => {
		             return(
		             	<figure className="text-center" style={{display: 'inline-block'}} >
		             		<img key={i} src={d.image} className="ml-5 mt-5 home-image-style" alt={d.title}/>
		             		<figcaption>{d.title}</figcaption>
		             	</figure>
		             )
		        })
			}
		</>
	);
}
export default HomeListImages;