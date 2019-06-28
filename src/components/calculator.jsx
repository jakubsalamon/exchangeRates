import React from 'reactn';
import { Component } from 'react';
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
    constructor(props) {
        super(props)
        console.log("szalom");
    }
    state = { 
        resultArray: [],
        text: "",
        text2: ""
    }
     
     handleInputChange(e) {
         let array = [];
         array = calc(e.target.value, this.props.value);
         console.log(array);
         this.setState({
             resultArray: [...array]
            })
        }

        metoda() {

        }

        componentWillReceiveProps() {
            this.setState({
                resultArray: [],
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
                text: `Za to nic nie kupisz frajerze`
            })
                } else {
            this.setState({
                text: `Kupisz za to ${this.state.resultArray[0]}`
                    })
            this.setState({
                text2: `, i dostaniesz ${this.state.resultArray[1]}gr reszty`
                     })
                    }}
        }


    render() { 
        return ( 
            <>
            <div className = "calc">
                <div className = "welcomeText">
                <p>Wpisz ile posiadasz złotówek, a program powie Ci, ile możesz za to kupić jednostek wybranej waluty</p>
                </div>
                <input ref = "numberInput" onChange = {this.handleInputChange.bind(this)} type = "text"></input><p>zł</p>
                <button onClick = {this.handleButtonClick.bind(this)} >Wprowadź</button>
                <p className = "result">{this.state.text}{this.state.text2}</p>

            </div>

            </>
         );
    }
}
 
export default Calculator;