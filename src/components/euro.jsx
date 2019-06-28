import React, { Component } from 'react';
import ValueContainer from './hej02.js';

class Euro extends Component {
    state = {  }

    componentWillMount() {
        this.setState({
            euro: this.props.szeloba
        })
    }

    render() { 
        return (
            <div> 
            <ValueContainer propWithValue = {this.props.szeloba}/>
            <p>{this.state.euro} zł</p>
            </div>
         );
    }
}
 
export default Euro;