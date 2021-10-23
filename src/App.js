import React from 'react';
import "animate.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Link, Route, Switch

} from "react-router-dom";
import Home from './components/home/home';
import Servicios from './components/servicios/servicios';
import Contactos from './components/contactos/contactos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './assets/imagenes/logo.png'




const App = () =>{
return(

    <Router>
      <div>
        <div className="separador">
          <nav className="navbar  bg-dark">
              {/*<img src={logo} width={100} alt="logo"/>*/}
            <input type="checkbox" id="check"/>
            <label form="check" className="fabars"><FontAwesomeIcon icon={faBars} /></label>

        <ul className="nav-menu">
          <li className="nav-item ">
            <Link to="/home" className="nav-link " >Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/servicios" className="nav-link ">Servicios</Link>
          </li>
          <li className="nav-item">
            <Link to="/servicios"className="nav-link ">Productos</Link>
          </li>
          <li className="nav-item">
            <Link to=""className="nav-link ">Sobre Nosotros</Link>
          </li>
          <li className="nav-item">
            <Link to="/contactos"className="nav-link ">Contactos</Link>
          </li>
        </ul>
            </nav>

    <Switch>
              <Route path="/" exact >
                <Home />
              </Route><Route path="/home" exact >
                <Home />
              </Route>
              <Route path="/servicios">
                <Servicios />
              </Route>
              <Route path="/contactos">
                <Contactos />
              </Route>

    </Switch>





        </div>
    </div>
    </Router>
)

}

export default App;
