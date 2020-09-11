import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{
	return(
		<Fragment>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="collapse navbar-collapse container" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/Perfil">Perfil</Link>
						</li>
					</ul>					
				</div>
			</nav>
		</Fragment>
	);
}
export default Header;