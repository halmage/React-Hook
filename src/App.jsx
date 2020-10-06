import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
/* Importando componentes */
import KanbanContainer from './pages/container/KanbanContainer';
import ShopContainer from './pages/container/ShopContainer';
import HomeContainer from './pages/container/HomeContainer';
import WalletContainer from './pages/container/WalletContainer';
import ProfileContainer from './pages/container/ProfileContainer';
import CalculatorContainer from './pages/container/CalculatorContainer';

const App = () => {
  return (
    <BrowserRouter>
    	<Switch>
    		<Route exact path="/" component={HomeContainer}/>
            <Route path="/Tienda" component={ShopContainer}/>
            <Route path="/Kanban" component={KanbanContainer}/>            
    		<Route path="/Perfil" component={ProfileContainer}/>
    		<Route path="/Billetera" component={WalletContainer}/>
    		<Route path="/Calculadora" component={CalculatorContainer}/>
    	</Switch>
    </BrowserRouter>
  );
}

export default App;
