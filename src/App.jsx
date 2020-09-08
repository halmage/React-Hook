import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
/* Importando componentes */
import HomeContainer from './pages/container/HomeContainer';

const App = () => {
  return (
    <BrowserRouter>
    	<Switch>
    		<Route exact path="/" component={HomeContainer}/>
    	</Switch>
    </BrowserRouter>
  );
}

export default App;
