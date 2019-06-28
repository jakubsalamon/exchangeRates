import React from 'react';
import { useGlobal } from 'reactn';
import '../css/infobox.css';
import Calculator from './calculator';

function Infobox() {
    
    const [currValue, setCurrValue] = useGlobal('currValue');
     
        return ( 
            <div className = "infobox">
            <Calculator value = {currValue} />
            </div>     
    );
}
 
export default Infobox;