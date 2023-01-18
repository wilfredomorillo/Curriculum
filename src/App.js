import React from 'react';
import './App.css';
import Landingpage from './componentes/landing/landing';
import { Route } from 'react-router-dom';
import Home from './componentes/home/home';


function App() {
  return (
    <>
      <div className="Landing">
        <Route exact path="/" component={Landingpage} />
      </div>
      <div className="App">
       
      <Route exact path='/home' component={Home}/>
      </div>
    </>

  );
}

export default App;
