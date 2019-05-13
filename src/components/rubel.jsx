import React, { Component } from 'react';

class Rubel extends Component {
    state = {  }

    componentWillMount() {
        this.setState({
            rubel: this.props.szeloba
        })
    }

    render() { 
        return ( 
            <p>{this.state.rubel} zł</p>
         );
    }
}
 
export default Rubel;