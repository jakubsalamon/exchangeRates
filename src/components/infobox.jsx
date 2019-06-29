import React from 'react';
import { useGlobal } from 'reactn';
import '../css/infobox.css';
import Calculator from './calculator';

function Infobox() {
    
    const [currValue, setCurrValue] = useGlobal('currValue');
    let disVal
    if (currValue === 0) {
        disVal = "none";
    }
        return ( 
            <div className = "infobox" style = {{display: disVal}}>
            <Calculator value = {currValue} />
            </div>     
    );
}
 
export default Infobox;