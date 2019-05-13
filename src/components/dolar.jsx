import React, { Component } from 'react';

class Dolar extends Component {
    state = { 
        
     };
    componentWillMount() {
        this.setState({
            dollar: this.props.szeloba
        })
    }

    //  componentWillReceiveProps(props) {
    //     this.setState({
    //         dollar: props.szeloba
    //     })
       
    // }
     
    render() { 
        
        
        return (
            <div className = "dolar">
            <p >{this.state.dollar} zł</p>
            </div>
         );
    }
}
 
export default Dolar;