import React from "react";
import Fruit from "./Fruit";

function Price(props){
    return(
        <div>
            <Fruit name="샤인머스켓" fruitPrice={1000}></Fruit>
            <Fruit name="망고스틴" fruitPrice={2000}></Fruit>
            <Fruit name="멜론" fruitPrice={3000}></Fruit>
        </div>
    );
}

export default Price;