// 삭제까지 하는 거 과제

import React, { useState } from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginLeft: 10,
        marginBottom: 0,
    },
};

function Task(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [form, setForm] = useState([]);
    const [newForm, setNewForm] = useState({ studentNumber: "", username: "" });

    const addInfo = () => {
        const user = { ...newForm, isLoggedIn };
        setForm([...form, user]);
        setNewForm({ studentNumber: "", username: "" });
    };

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewForm({
            ...newForm,
            [name]: value,
        });
    };



    const onClickLogin = () => {
        if (newForm.studentNumber === "202135917" && newForm.username === "김규리") {
            setIsLoggedIn(true);
        } else {
            alert("로그인 실패");
            setIsLoggedIn(false);
        }

        addInfo();
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    const onRemove = index => {
        const nextLogin = form.filter(name => index !== index);
        setForm(nextLogin);
    }

    return (
        <div>
            <h1>로그인 정보</h1>
            {isLoggedIn && <h3 style={styles.greeting}>환영합니다.</h3>}
            <div style={styles.wrapper}>
                <input
                    type="text"
                    name="studentNumber"
                    placeholder="학수번호"
                    value={newForm.studentNumber}
                    onChange={onChange}
                    style={{ marginRight: "5px" }}
                />
                <input
                    type="text"
                    name="username"
                    placeholder="유저명"
                    value={newForm.username}
                    onChange={onChange}
                />
                {isLoggedIn ? (
                    <button
                        style={{ marginLeft: "30px" }}
                        onClick={onClickLogout}
                    >
                        로그아웃
                    </button>
                ) : (
                    <button
                        style={{ marginLeft: "30px" }}
                        onClick={onClickLogin}
                    >
                        로그인
                    </button>
                )}
            </div>
            <h1>사용자 정보</h1>
            <ul>
                {form.map((item, index) => (
                    <li key={index} onDoubleClick={()=>onRemove(index)}>
                        학수번호: [{item.studentNumber}], &nbsp;&nbsp; 
                        유저명: [{item.username}], &nbsp;&nbsp; 
                        로그인 여부: [{item.isLoggedIn ? "성공" : "실패"}]
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Task;


/*
// 로그인 성공 -> 학수번호: 202135917, 유저명: 김규리

import React, { useState } from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginLeft: 10,
        marginBottom: 0,
    },
};

function Task(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [form, setForm] = useState([]);
    const [newForm, setNewForm] = useState({ studentNumber: "", username: "" });

    const addInfo = () => {
        setForm([...form, newForm]);
        setNewForm({ studentNumber: "", username: "" });
    };

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewForm({
            ...newForm,
            [name]: value,
        });
    };



    const onClickLogin = () => {
        if (newForm.studentNumber === "202135917" && newForm.username === "김규리") {
            setIsLoggedIn(true);
        } else {
            alert("로그인 실패");
            setIsLoggedIn(false);
        }

        addInfo();
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <h1>로그인 정보</h1>
            {isLoggedIn && <h3 style={styles.greeting}>환영합니다.</h3>}
            <div style={styles.wrapper}>
                <input
                    type="text"
                    name="studentNumber"
                    placeholder="학수번호"
                    value={newForm.studentNumber}
                    onChange={onChange}
                    style={{ marginRight: "5px" }}
                />
                <input
                    type="text"
                    name="username"
                    placeholder="유저명"
                    value={newForm.username}
                    onChange={onChange}
                />
                {isLoggedIn ? (
                    <button
                        style={{ marginLeft: "30px" }}
                        onClick={onClickLogout}
                    >
                        로그아웃
                    </button>
                ) : (
                    <button
                        style={{ marginLeft: "30px" }}
                        onClick={onClickLogin}
                    >
                        로그인
                    </button>
                )}
            </div>
            <h1>사용자 정보</h1>
            <ul>
                {form.map((item, index) => (
                    <li key={index}>
                        학수번호: [{item.studentNumber}], &nbsp;&nbsp; 
                        유저명: [{item.username}] &nbsp;&nbsp; 
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Task;
*/