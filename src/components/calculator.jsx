import React, { Component } from 'react';
import '../css/calc.css';

const calc = (yourMoney, currencyCourse) => {

    let division = yourMoney/currencyCourse;
    let endOf = division%1;
    let wholeMoney = division - endOf;
    let keepTheChange = Math.round(endOf * 100)/100;
    let resultArr = [wholeMoney, keepTheChange];
    return resultArr;
    
    }

class Calculator extends Component {
    state = { 
        resultArray: []
     }

     
     
     
     handleInputChange(e) {
         let array = [];
         array = calc(e.target.value, 2.7676);
         console.log(array);
         this.setState({
             resultArray: [...array]
            })

        }

    render() { 
        return ( 
            <>
            <div className = "calc">

                <input onChange = {this.handleInputChange.bind(this)} type = "text"></input>
                <button  >Wprowadź</button>
                <p className = "result">Ile za to kupisz: {this.state.resultArray[0]}  i dostaniesz  {this.state.resultArray[1]}gr reszty</p>

            </div>

            </>
         );
    }
}
 
export default Calculator;