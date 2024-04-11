import React from "react";
import "./FancyBorder.css"; // "fancyBorder.css" 파일을 import

function FancyBorder(props){
    return(
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

export default FancyBorder;