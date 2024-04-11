import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link as RouterLink 
} from "react-router-dom";
import styled from "styled-components";
// Pages
import MainPage from './component/page/MainPage';
import LoginPage from "./component/page/LoginPage";
import SubListPage from "./component/page/SubListPage";
import MusicListPage from "./component/page/MusicListPage";
import MusicDetailPage from "./component/page/MusicDetailPage";

import './App.css';

const MainTitleText = styled(RouterLink)`
    margin : 15px;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    color: black;
    cursor: pointer;
    text-decoration: none;
    display: grid;
  
    &:hover {
        color: grey;
    }
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText to="/">Music</MainTitleText>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="select/:selectId" element={<SubListPage/>}/>
        <Route path="select/:selectId/:subId" element={<MusicListPage/>}/>
        <Route path="select/detail/:selectId/:subId/:musicId" element={<MusicDetailPage/>}/>
        {/* 다른 페이지들 추가 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
