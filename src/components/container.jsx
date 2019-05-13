import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink, Link} from 'react-router-dom';
import Content from './content';
import '../css/container.css';



class Container extends Component {
    state = { 
       
     };

        moneyGeter01 = () => {
            
            let xhr = new XMLHttpRequest();
            xhr.open("GET", 'http://api.nbp.pl/api/exchangerates/rates/a/usd/', false );
            xhr.send();  
            let response = JSON.parse(xhr.response);
            this.setState({
                dollar: response.rates[0].mid
              })
         }
         moneyGeter02 = () => {
            
            let xhr = new XMLHttpRequest();
            xhr.open("GET", 'http://api.nbp.pl/api/exchangerates/rates/a/eur/', false );
            xhr.send();  
            let response = JSON.parse(xhr.response);
            this.setState({
                euro: response.rates[0].mid
              })
         }
         moneyGeter03 = () => {
            
            let xhr = new XMLHttpRequest();
            xhr.open("GET", 'http://api.nbp.pl/api/exchangerates/rates/a/jpy/', false );
            xhr.send();  
            let response = JSON.parse(xhr.response);
            this.setState({
                yen: response.rates[0].mid
              })
         }
         moneyGeter04 = () => {
            
            let xhr = new XMLHttpRequest();
            xhr.open("GET", 'http://api.nbp.pl/api/exchangerates/rates/a/rub/', false );
            xhr.send();  
            let response = JSON.parse(xhr.response);
            this.setState({
                rubel: response.rates[0].mid
              })
         }
        

    render() { 
        return ( 
            <>
            <div className = "container">
            <Router>
            <nav className = "leftmenu">
                <ul className = "ul">
                    <li className = "li"><Link to = "/dolar" className = "nav01" onClick = {this.moneyGeter01.bind(this)}>Kurs Dolara</Link></li>
                    <li className = "li"><NavLink to = "/euro" className = "nav02" onClick = {this.moneyGeter02.bind(this)}>Kurs Euro</NavLink></li>
                    <li className = "li"><NavLink to = "/yen" className = "nav03" onClick = {this.moneyGeter03.bind(this)}>Kurs Yena</NavLink></li>
                    <li className = "li"><NavLink to = "/rubel" className = "nav04" onClick = {this.moneyGeter04.bind(this)}>Kurs Rubla</NavLink></li>
                    <li className = "li"><NavLink to = "/" className = "nav05">Powrót</NavLink></li>
                </ul>
            </nav>
            <Content waldek = {this.state.dollar} euro = {this.state.euro} yen = {this.state.yen} rubel = {this.state.rubel}/>
            </Router>
            </div>
            </>
         );
    }
}
 
export default Container;
