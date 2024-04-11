// 로그인 페이지
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Toolbar from "../ui/Toolbar";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 1500px;
    text-align: center;
    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

const FormContainer = styled.div`
    margin : 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Input = styled.input`
    padding : 10px;
    font-size : 15px;
    width : 140px;
    border: 1px solid black;
    border-Radius: 5px;
`;

function LoginPage(props){
    const navigate = useNavigate();
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [form, setForm] = useState({ username: "", userId: "", gender: ""});

    const onChange = (e) => { // 폼에 입력한 정보 전달
        const name = e.target.name;
        const value = e.target.value;
        setForm({
            ...form,
            [name]:value
        });
    };

    const onClickLogin = () => {
        // 로그인 버튼을 클릭할 때 로컬 스토리지에 정보 저장
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', form.username);
        localStorage.setItem('userId', form.userId);
        localStorage.setItem('gender', form.gender);
        // setIsLoggedIn(true);

        // 로그인 정보 alert
        alert(` 로그인 성공~!
                이름: ${localStorage.getItem('username')},
                아이디: ${localStorage.getItem('userId')}
                성별: ${localStorage.getItem('gender')} 
        `);
        navigate('/');
    };

    return (
        <Wrapper>
            <Container>
                <Toolbar pageTitle = {"로그인 페이지"} />
                <FormContainer>
                    <h1>로그인 정보</h1>
                    <Input
                        type="text"
                        name="username"
                        placeholder="이름"
                        value={form.username}
                        onChange={onChange}
                        style={{ marginRight: "5px" }}
                    />
                    <Input
                        type="text"
                        name="userId"
                        placeholder="아이디"
                        value={form.userId}
                        onChange={onChange}
                        style={{ marginRight: "5px" }}
                    />
                    <label>
                    <select name= "gender" value={form.gender} onChange={onChange}>
                        <option value="남자">남자</option>
                        <option value="여자">여자</option>
                    </select>
            </label>

                    <button
                        style={{ 
                            margin: "20px",
                            backgroundColor: "white",
                            border: "2px solid grey",
                            borderRadius: "5px",
                            fontWeight: "bold",
                            fontSize: "20px",
                            padding: "7px",
                            cursor: 'pointer',
                        }}
                        onClick={onClickLogin}
                    >로그인</button>
                </FormContainer>
            </Container>
        </Wrapper>
    );
}

export default LoginPage;