import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import WelcomeDialog from './chapter_13/WelcomeDialog';
// import "./chapter_13/FancyBorder.css"; // "fancyBorder.css" 파일을 import
// import SignUpDialog from './chapter_13/SignUpDialog';
// import ProfileCard from './chapter_13/ProfileCard';
// import App from './chapter_14/App';
// import DarkOrLight from './chapter_14/DarkOrLight';
// import MainPage from './chapter_15/MainPage';
// import Sample from './chapter_15/Sample';
import Blocks from './chapter_15/Blocks';

ReactDOM.render(
  <React.StrictMode>
    {/* <WelcomeDialog/> */}
    {/* <SignUpDialog/> */}
    {/* <ProfileCard/> */}
    {/* <App/> */}
    {/* <DarkOrLight/> */}
    {/* <MainPage/> */}
    {/* <Sample/> */}
    <Blocks/>
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
