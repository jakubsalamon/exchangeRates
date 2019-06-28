import React from 'reactn';
import {useGlobal} from 'reactn';

const Hej02 = (props) => {

    const [currValue, setCurrValue] = useGlobal('currValue');    
    
    if (props.propWithValue !== currValue) {
    setCurrValue(props.propWithValue);
    }

return (
    <>
    </>  
)

}

export default Hej02;