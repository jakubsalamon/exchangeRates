import React, { Component } from 'react';
import '../css/infobox.css';
import Calculator from './calculator';

class Infobox extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "infobox">
            <Calculator/>
            </div>
         );
    }
}
 
export default Infobox;