import React from 'react';
import './App.css';
import Landingpage from './componentes/landing/landing';
import { Route } from 'react-router-dom';
import Home from './componentes/home/home';
import Experiencia from './componentes/experiencia/experiencia';
import Education from './componentes/educacion/educacion';
import Porfolio from './componentes/porfolio/porfolio';
function App() {
  return (
    <>
      <div className="Landing">
        <Route exact path="/" component={Landingpage} />
      </div>
      <div className="App">
      
      <Route exact path='/home' component={Home}/> 
      <Route exact path='/experiencia' component={Experiencia}/>
      <Route exact path='/educacion' component={Education}/>
      <Route exact path='/porfolio' component={Porfolio}/>
      </div>
    </>

  );
}

export default App;
