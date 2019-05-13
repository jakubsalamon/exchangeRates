import React, { Component } from 'react';

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
            <p>{this.state.euro} zł</p>
            </div>
         );
    }
}
 
export default Euro;