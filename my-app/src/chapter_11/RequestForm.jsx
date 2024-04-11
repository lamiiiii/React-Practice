import React, { useState } from "react";

const styles = {
    textareaStyle: {
        margin: 10,
        width: 200,
    }
}

function RequestFrom(props){
    const[value, setValue] = useState('요청사항을 입력하세요');

    const handleChange = (event) => {
        setValue(event.target.value);

        console.log(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('입력한 요청사항: ' + value);
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                요청사항:
                <textarea style={styles.textareaStyle} value={value} onChange={handleChange}/>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}

export default RequestFrom;