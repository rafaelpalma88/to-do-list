import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Bootstrap.css';
import './App.css';

import Tarefas from './pages/Tarefas'
import Sobre from './pages/Sobre'

function App() {
  return (
    <div className="App">
     
      <Router>
        <div>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/tarefas" className="nav-link">Tarefas</Link>
                </li>
                <li className="nav-item">                
                  <Link to="/sobre" className="nav-link">Sobre</Link>
                </li> 
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
          <Switch>
            <Route path="/tarefas">
              <Tarefas />
            </Route>
            <Route path="/sobre">
              <Sobre />
            </Route>           
          </Switch>
        </div>
      </Router>
      <footer className="container">
          <p>&copy; Company 2017-2019</p>
      </footer>    
    </div>
  );
}

export default App;
