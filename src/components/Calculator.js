import React, {useState} from "react";
import "./Calculator.css";

function Calculator(){

const [Num1, setNum1] = useState("");
const [Num2, setNum2] = useState("");
const [result, setresult] = useState("");
const [error, seterror] = useState("");

const Num1Change = (data) => {
    setNum1(data.target.value);
}
const Num2Change = (data) => {
    setNum2(data.target.value);
}
// addition
const Addition = () => {
    if(!validateInputs()){
        return;
    }
    setresult(parseFloat(Num1)+ parseFloat(Num2));
    seterror("");
}
// sub
const Subtraction = () => {
    if(!validateInputs()){
        return;
    }
    setresult(parseFloat(Num1)- parseFloat(Num2));
    seterror("");
}
// multiplication
const Multiplication = () => {
    if(!validateInputs()){
        return;
    }
    setresult(parseFloat(Num1) * parseFloat(Num2));
    seterror("");
}
// division
const Division = () => {
    if(!validateInputs()){
        return;
    }
    setresult(parseFloat(Num1) / parseFloat(Num2));
    seterror("");
}

const validateInputs = () => { 
    if(!Num1){
        seterror("Error: Num1 cannot be empty");
        return false;
    }
    if(!Num2){
        seterror("Error: Num2 cannot be empty");
        return false;
    }
    if(isNaN(parseFloat(Num1))||isNaN(parseFloat(Num2))||!isFinite(Num1) || !isFinite(Num2)){
        seterror("Error: Please enter valid numbers");
        return false;
    }
    return true;
};



    // retrun 
    return (
        <div className="calculator-container">
            <h1>React Calculator</h1>
            <div>
                <input onChange={Num1Change} type="text" placeholder="Num 1" ></input>
                <input onChange={Num2Change} type="text" placeholder="Num 2" ></input>
            </div>
            <div>
                <button onClick={Addition} type="button">+</button>
                <button onClick={Subtraction} type="button">-</button>
                <button onClick={Multiplication} type="button">*</button>
                <button onClick={Division} type="button">/</button>
            </div>

            {error && <div className="error">{error}</div>}
            {result && <div className="result">Result = {result}</div>}
            {result && (
            <div className="Success">
                Success: Your result is shown above!   
            </div>
            )}
        </div>

    );
}
export default Calculator;