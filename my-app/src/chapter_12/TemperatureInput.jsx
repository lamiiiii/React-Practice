import React, {useState} from "react";

const scaleNames = {
    c: "섭씨",
    f: "화씨" // , 없어야 함
};

function TemperatureInput(props){
    //const [temperature, setTemperature] = useState("");

    const handleChange = (event) => {
        //setTemperature(event.target.value);
        props.onTemperatureChange(event.target.value);
    }
    return(
        <fieldset>
            <legend>온도를 입력해 주세요(단위:{scaleNames[props.scale]}); </legend> 
                                                                        {/* 콜론아니고 세미콜론 */}
            <input value={props.temperature} onChange={handleChange}/>
        </fieldset>
    );
}

export default TemperatureInput;