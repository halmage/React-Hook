import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
/* Importando componentes */
import HomeContainer from './pages/container/HomeContainer';
import ProfileContainer from './pages/container/ProfileContainer';

const App = () => {
  return (
    <BrowserRouter>
    	<Switch>
    		<Route exact path="/" component={HomeContainer}/>
    		<Route exact path="/Perfil" component={ProfileContainer}/>
    	</Switch>

    </BrowserRouter>
  );
}

export default App;
