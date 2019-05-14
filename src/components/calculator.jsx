import React, { Component } from 'react';
import '../css/calc.css';

class Calculator extends Component {
    state = { 
        yourMoney: ""
     }

     handleInputChange(e) {
         console.log(e.target);
         console.log(e);
         this.setState({
             yourMoney: e.target.value
         })
     }

    render() { 
        return ( 
            <>
            <div className = "calc">

                <input onChange = {this.handleInputChange.bind(this)} type = "text"></input>
                <button>Wprowadź</button>
                <p className = "result">Ile za to kupisz: {this.state.yourMoney}</p>

            </div>

            </>
         );
    }
}
 
export default Calculator;