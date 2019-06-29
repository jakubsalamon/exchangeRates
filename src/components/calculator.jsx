import React from 'reactn';
import { Component } from 'react';
import '../css/calc.css';


const calc = (yourMoney, currencyCourse) => {

    let division = yourMoney/currencyCourse;
    let endOf = division%1;
    let wholeMoney = division - endOf;
    // let keepTheChange = Math.round(endOf * 100)/100;
    // let resultArr = [wholeMoney, keepTheChange];
    return wholeMoney;
    }

class Calculator extends Component {
    
    state = { 
        result: "",
        text: "",
        text2: ""
    }
     
     handleInputChange(e) {
         let array;
         array = calc(e.target.value, this.props.value);
         console.log(array);
         this.setState({
             result: array
            })
        }

        metoda() {

        }

        componentWillReceiveProps() {
            this.setState({
                result: "",
                text: "",
                text2: ""
            });
            this.refs.numberInput.value = "";
            }
        

        handleButtonClick = () => {
            if (isNaN(this.props.value)) {
                this.setState({
                    text: `Nie wybrałeś żadnej waluty do przeliczeń`
                })
            }
            else {
                if (this.refs.numberInput.value < this.props.value) {
            this.setState({
                text: `Masz za mało pieniędzy...`
            })
                } else {
            this.setState({
                text: `Jednostki tej waluty, które kupisz za tyle złotówek, to: ${this.state.result}`
                    })
                    }}
        }


    render() { 
        return ( 
            <>
            <div className = "calc">
                <div className = "welcomeText">
                <p>Ile masz złotówek? Program powie Ci ile możesz za to kupić jednostek wybranej waluty</p>
                </div>
                <input ref = "numberInput" onChange = {this.handleInputChange.bind(this)} type = "number" placeholder = "Wprowadź ilość złotówek..."></input><p style = {{margin: "0 10px 0 10px"}}>zł</p>
                <button onClick = {this.handleButtonClick.bind(this)} >Zatwierdź</button>
                <div className = "response">
                <p className = "result">{this.state.text}</p>
                </div>
            </div>

            </>
         );
    }
}
 
export default Calculator;