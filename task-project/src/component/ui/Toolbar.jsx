import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from "./Button";

const Wrapper = styled.div`
    padding: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 2px solid black;
    border-radius: 5px;
`;

function Toolbar(props){
    const navigate = useNavigate();
    const {isLoggedIn, pageTitle} = props;

    const onClickLogout = () => { // 로그아웃 버튼 클릭시 localStorage 비우기
        localStorage.clear();
        alert("로그아웃 완료");
        navigate('/');
    }
    
    return(
        <Wrapper>
            {isLoggedIn && <span style={{fontSize: '17px'}}>{localStorage.getItem('username')}님 환영합니다.</span>}
            {<span style={{fontSize: '22px', fontWeight: 'bold'}}>{pageTitle}</span>}
            {isLoggedIn ? (
                <Button 
                    title='로그아웃'
                    onClick={onClickLogout}
                />
            ):(
                <Button
                    title='로그인'
                    onClick={() => {
                        navigate('/LoginPage');
                    }}
                />
            )}
        </Wrapper>
    )
}

export default Toolbar;



