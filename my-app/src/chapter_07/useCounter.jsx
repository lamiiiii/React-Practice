// useCounter() 커스텀 훅 만들기

import React, {useState} from "react";

function useCounter(initialValue){
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1); // 입장 -> 더하기
    const decreaseCount = () => setCount((count) => Math.max(count-1, 0)); // 퇴장 -> 빼기

    return [count, increaseCount, decreaseCount];
}

export default useCounter;