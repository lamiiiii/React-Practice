// import React from "react";

// function Page(props){
//     const user=props.user;
//     const userLink =(
//         <Link href={user.permalink}>
//             <Avatar user={user} size={avatarSize}/>
//         </Link>
//     );
//     // Page 컴포넌트는 PageLayout 컴포넌트를 렌더링
//     // 이때 props로 userLink를 함께 전달

//     return(
//         <PageLayout userLink = {userLink}/>
//     )

//     // PageLayout 컴포넌트는 NavugationBar 컴포넌트를 렌더링
//     <PageLayout userLink={...}/>

//     // NavigationBar 컴포넌트는 props로 전달 받은 userLink element를 리턴
//     <NavigationBar userLink={...}/>
// }