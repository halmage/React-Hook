import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{
	return(
		<Fragment>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container collapse navbar-collapse container" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/Perfil">Perfil</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/Billetera">Billetera</Link>
						</li>	
						<li className="nav-item">
							<Link className="nav-link" to="/Calculadora">Calculadora</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/Tienda">Tienda</Link>
						</li>							
					</ul>
				</div>
			</nav>
		</Fragment>
	);
}
export default Header;
