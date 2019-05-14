import React, { Component } from 'react';
import '../css/calc.css';

class Calculator extends Component {
    state = { 
        yourMoney: 0
     }

     handleInputChange(e) {
         console.log("ty ciulu");
         console.log(e.target.value);
         this.setState({
             yourMoney: this.e.target.value
         })
     }

    render() { 
        return ( 
            <>
            <div className = "calc">

                <input onChange = {this.handleInputChange} type = "text"></input>
                <button>Wprowadź</button>
                <p className = "result">Ile za to kupisz: {this.state.yourMoney}</p>

            </div>

            </>
         );
    }
}
 
export default Calculator;