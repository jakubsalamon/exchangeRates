import React, { Component } from 'react';
import ValueContainer from './hej02.js';

class Yen extends Component {
    state = {  }

    componentWillMount() {
        this.setState({
            yen: this.props.szeloba
        })
    }

    render() { 
        return ( 
            <div>
            <ValueContainer propWithValue = {this.props.szeloba}/>
            <p>{this.state.yen} zł</p>
            </div>
         );
    }
}
 
export default Yen;