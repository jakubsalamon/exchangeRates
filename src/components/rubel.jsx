import React, { Component } from 'react';
import ValueContainer from './hej02.js';

class Rubel extends Component {
    state = {  }

    componentWillMount() {
        this.setState({
            rubel: this.props.szeloba
        })
    }

    render() { 
        return ( 
            <div>
            <ValueContainer propWithValue = {this.props.szeloba}/>
            <p>{this.state.rubel} zł</p>
            </div>
         );
    }
}
 
export default Rubel;