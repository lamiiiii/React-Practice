import React, { useState } from "react";

const styles = {
    formStyle: {
        margin: 50,
    }
}

function SignUp(props){
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자");
    const [from, setFrom] = useState("한국");

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };
    
    const handleChangeFrom = (event) => {
        setFrom(event.target.value);
    }

    const handleSubmit = (event) => {
        alert(`이름: ${name}`);
        alert(`이름: ${name}, 성별: ${gender}`);
        alert(`이름: ${name}, 성별: ${gender}, 국적: ${from}`);
        event.preventDefault();
    };

    return(
        <form style={styles.formStyle} onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={name} onChange={handleChangeName}/>
            </label>
            <br/>

            <label>
                성별:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <br/>

            <label>
                국적:
                <input type="text" value={from} onChange={handleChangeFrom}/>

            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default SignUp;