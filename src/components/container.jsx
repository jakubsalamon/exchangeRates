import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink, Link, Route, Switch} from 'react-router-dom';
import Content from './content';
import '../css/container.css';



class Container extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div className = "container">
            <Router>
            <nav className = "leftmenu">
                <ul className = "ul">
                    <li className = "li"><Link to = "/dolar" className = "nav01">Kurs Dolara</Link></li>
                    <li className = "li"><NavLink to = "/euro" className = "nav02">Kurs Euro</NavLink></li>
                    <li className = "li"><NavLink to = "/jen" className = "nav03">Kurs Yena</NavLink></li>
                    <li className = "li"><NavLink to = "/rubel" className = "nav04">Kurs Rubla</NavLink></li>
                    <li className = "li"><NavLink to = "/" className = "nav05">Powrót</NavLink></li>
                </ul>
            </nav>
            <Content/>
            </Router>
            </div>
            </>
         );
    }
}
 
export default Container;
