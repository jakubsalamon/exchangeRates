import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './home';
import Dolar from './dolar';
import Euro from './euro';
import Yen from './jen';
import Rubel from './rubel';

class Content extends Component {
    state = {  }
    render() { 
        return ( 
            
            <div className = "content">
                <Switch>
                    <Route exact path = "/" component = {Home}/>
                    <Route path = "/dolar" component = {Dolar}/>
                    <Route path = "/euro" component = {Euro}/>
                    <Route path = "/jen" component = {Yen}/>
                    <Route path = "/rubel" component = {Rubel}/>
                </Switch>
            </div>
            
         );
    }
}
 
export default Content;