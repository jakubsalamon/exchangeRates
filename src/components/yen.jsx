import React, { Component } from 'react';

class Yen extends Component {
    state = {  }

    componentWillMount() {
        this.setState({
            yen: this.props.szeloba
        })
    }

    render() { 
        return ( 
            <p>{this.state.yen} zł</p>
         );
    }
}
 
export default Yen;