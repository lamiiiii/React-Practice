import React, {useState} from "react";

function FunctionToggle(props){
    const [isToggleOn, setIsToggleOn] = useState(true);

    // // 방법 1
    // function handleClick(){
    //     setIsToggleOn((isToggleOn) => !isToggleOn);
    // }

    // 방법 2
    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }
    return(
        <button onClick={handleClick}>
            {isToggleOn ? '켜짐' : '꺼짐'};
        </button>
    )
}

export default FunctionToggle;