import React from "react";

function Fruit(props){
    return(
        <div>
            <h1>{`이 과일은 ${props.name}입니다.`}</h1>
            <h2>{`이 과일의 가격은 ${props.fruitPrice}원 입니다.`}</h2>
        </div>
    )
}

export default Fruit;