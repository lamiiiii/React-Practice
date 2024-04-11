// 이 파일에 리스트를 활용하던, 학번 이름을 받아 로그인 로그아웃 

import React, {useEffect, useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return(
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div
                style={{padding:16}}>소플과 함께하는 리액트 공부!</div>
        </div>
    );
}
export default LandingPage;