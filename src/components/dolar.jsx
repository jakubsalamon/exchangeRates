import React, { Component } from 'react';
import ValueContainer from './hej02.js';

class Dolar extends Component {
    state = { 
        
     };
     componentWillMount() {
        this.setState({
            dollar: this.props.szeloba
        })
     }
    render() { 
        
        
        return (
            <div className = "dolar">
            <ValueContainer propWithValue = {this.props.szeloba}/>
            <p >{this.state.dollar} zł</p>
            </div>
         );
    }
}
export default Dolar;