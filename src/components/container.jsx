import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import Dolar from './dolar';
import Euro from './euro';
import Yen from './jen';
import Rubel from './rubel';

class Container extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
            <nav>
                <ul>
                    <li><NavLink to = "/dolar">Kurs Dolara</NavLink></li>
                    <li><NavLink to = "/euro">Kurs Euro</NavLink></li>
                    <li><NavLink to = "/jen">Kurs Yena</NavLink></li>
                    <li><NavLink to = "/rubel">Kurs Rubla</NavLink></li>
                </ul>
            </nav>
            <div>
                <Switch>
                    <Route path = "/dolar" component = {Dolar}/>
                    <Route path = "/euro" component = {Euro}/>
                    <Route path = "/jen" component = {Yen}/>
                    <Route path = "/rubel" component = {Rubel}/>
                </Switch>
            </div>
            </Router>
         );
    }
}
 
export default Container;
