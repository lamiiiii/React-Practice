import React, { useState } from "react";

const styles = {
    selectStyle: {
        margin: 10,
        width: 50,
        height: 20,
    }
}

function FruitSelect(props){
    const [value, setValue] = useState('grape');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('선택한 과일:' + value);
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요:
                <select style={styles.selectStyle} value={value} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">수박</option>
                </select>
            </label>
            <button type="submit">제출</button>
            {/* <br/>
            <input type="file/"/> */}
        </form>
    )
}

export default FruitSelect;