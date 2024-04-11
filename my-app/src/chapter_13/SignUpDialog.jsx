import React from "react";
import { useState } from "react";
import Dialog from "./Dialog";

function SignUpDialog(props){
    const [nickname, setNickname] = useState("");
    const handleChange = (event) =>{
        setNickname(event.target.value);
    }
    const handleSignUp = () => {
        alert(`어서 오세요, ${nickname}님!`);
    }

    return(
        <Dialog title="화성탐사프로그램" message="우리 사이트를 방문하신 것을 환영합니다.">
            <label>이름:
                <input value={nickname} onChange={handleChange}/>
                <button onClick={handleSignUp}>가입하기</button>
            </label>
        </Dialog>
    );
}

export default SignUpDialog;