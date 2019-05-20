import React, { Component } from 'react';
import '../css/calc.css';
import {zmienna} from './layout';


const calc = (yourMoney, currencyCourse) => {

    let division = yourMoney/currencyCourse;
    let endOf = division%1;
    let wholeMoney = division - endOf;
    let keepTheChange = Math.round(endOf * 100)/100;
    let resultArr = [wholeMoney, keepTheChange];
    return resultArr;
    
    }

class Calculator extends Component {
    constructor() {
        super()
        console.log(zmienna);
    }
    state = { 
        resultArray: [],
        text: "",
        text2: ""
    }
     
     handleInputChange(e) {
         let array = [];
         array = calc(e.target.value, 2.7676);
         console.log(array);
         this.setState({
             resultArray: [...array]
            })
        }

        handleButtonClick = () => {
            
            this.setState({
                text: `Kupisz za to ${this.state.resultArray[0]}`
                    })
            this.setState({
                text2: `, i dostaniesz ${this.state.resultArray[1]}gr reszty`
                     })
                    
        }

    render() { 
        return ( 
            <>
            <div className = "calc">

                <input onChange = {this.handleInputChange.bind(this)} type = "text"></input>
                <button onClick = {this.handleButtonClick.bind(this)} >Wprowadź</button>
                <p className = "result">{this.state.text}{this.state.text2}</p>

            </div>

            </>
         );
    }
}
 
export default Calculator;