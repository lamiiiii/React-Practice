import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

// 1
// function Calculator(props){
//     const [temperature, setTemperature] = useState('');

//     const handleChange = (event) => {
//         setTemperature(event.target.value);
//     }

//     return(
//         <fieldset>
//             <legend>섭씨 온도를 입력하세요: </legend>
//             <input value={temperature} onChange={handleChange}/>
//             <BoilingVerdict celcis={parseFloat(temperature)}/>
//         </fieldset>
//     )
// }

//-----------------------------------------------------------
// 2
// function Calculator(props){
//     return(
//         <div>
//             <TemperatureInput scale="c"/>
//             <TemperatureInput scale="f"/>
//         </div>
//     );
// }

//-----------------------------------------------------------
// 3
function Calculator(props){
    const[temperature, setTemperature] = useState("");
    const[scale, setScale] = useState("c");

    const handleCelciusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const celsius = 
        scale === "f" ? tryConvert(temperature, toCelsius):temperature;
    const fahrenheit = 
        scale === "c" ? tryConvert(temperature, toFahrenheit):temperature;

    return(
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelciusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)}/>
        </div>
    );
}

function toCelsius(fahrenheit){
    return((fahrenheit-32)*5/9);
}
function toFahrenheit(celsius){
    return((celsius*9)/5+32); // 세미콜론 없어도 상관없음
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return"";
    }
    const output = convert(input);
    const rounded = Math.round(output*1000)/1000;
    return rounded.toString();
}

export default Calculator;