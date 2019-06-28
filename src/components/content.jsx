import React from 'reactn';
import { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import '../css/content.css';

import Home from './home';
import Dolar from './dolar';
import Euro from './euro';
import Yen from './yen';
import Rubel from './rubel';

class Content extends Component {
    
    state = { 
    };
    componentDidMount(){
        this.setState({
            dollar: this.props.waldek,
            euro: this.props.euro,
            yen: this.props.yen,
            rubel: this.props.rubel
        })
    }

    componentWillReceiveProps(props) {
        this.setState({
            dollar: props.waldek,
            euro: props.euro,
            yen: props.yen,
            rubel: props.rubel
        })
       
    }
    
    render() { 
        console.log(`Jestem w content ${this.state.dollar}`)
        return ( 
            
            <div className = "content">
                <Switch>
                    <Route exact path = "/" component = {Home}/>
                    <Route path = "/dolar" render = {() => (<Dolar szeloba = {this.state.dollar}/>)}/>
                    <Route path = "/euro" render = {() => (<Euro szeloba = {this.state.euro}/>)}/>
                    <Route path = "/yen" render = {() => (<Yen szeloba = {this.state.yen}/>)}/>
                    <Route path = "/rubel" render = {() => (<Rubel szeloba = {this.state.rubel}/>)}/>
                </Switch>
            </div>
            
         );
    }
}
 
export default Content;