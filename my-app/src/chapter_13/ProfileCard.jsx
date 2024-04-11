import React from "react";
import Card from "./Card"

const profiles = [
    {
        id: 1,
        title: "MIYEON",
        color: "pink",
        intro: "저의 생일은 1997년 1월 31일입니다.",
        src:
        "https://i.namu.wiki/i/XxgHiMrYFC1P67FWh0tIwW528Esv-umHwzj3ckw_5UP0tMHxgjSJQIhUOYxh9Mi1Tsh7-a8Jn8_RywkRlVPKmlqY2Y4hXzXhagV4i3l7XdXZGQTkC-51G5GAV6e0ZoKpjj8C4MiK03daSg1UMnHIrQ.webp",
    },
    {
        id: 2,
        title: "JeonSoYeon",
        color: "lightblue",
        intro: "저의 생일은 1998년 8월 26일입니다.",
        src:
        "https://i.namu.wiki/i/CHMvwwrGUHZRdcniO9g9DU4yNIYKgK_1sgOcboF4EaXYmtLtre6E13adV6yrDmKTAgVOfJZ77CD-p0h45u4RLZNbFAvzhGODhZxfvXTObEYdYIOTOq8AaZeRzcuwWTXg_LzcVHWG0g8Lq6NTViA7yA.webp",
    },
    {
        id: 3,
        title: "MINNIE",
        color: "lightyellow",
        intro: "저의 생일은 1997년 10월 23일입니다.",
        src:
        "https://i.namu.wiki/i/dNbSYbxVbWc03omgeLPezBXED35u3ohW_IwWjGZd4xpr-32-c7JjRnSOIIdIjlvA063iseOPG7x7nkUAkUyWYrSndlU50mEveM4wsYPtJHqM82MtoWe9RNOGiPzbdsqZDQb8jMT9MJ-oB_l_pbF2ng.webp",
    },
    {
        id: 4,
        title: "YUQI",
        color: "lightgray",
        intro: "저의 생일은 1999년 9월 23일입니다.",
        src:
        "https://i.namu.wiki/i/cZcYfLI3w8Icdkhk94BpgqCC091Jmx87okVVeUpNYgtTVjIzkkrEXxiKBndqrUNSGzcbLKAqVdjWVA2R7WSoXSnI5LXAboDofdN_2DuB8STNlVhpvUq4fgfLZ9Qt2BlRPdZ9nyfmC_qv_9caRnUHDw.webp",
    },
    {
        id: 5,
        title: "SHUHUA",
        color: "purple",
        intro: "저의 생일은 2000년 1월 6일입니다.",
        src:
        "https://i.namu.wiki/i/tcSp0UlXjW0xWqxLrilDUYuC1wz2k3UGLP7oF2JHMSAH48ZJaH7qCdgujbcfHjyJv0kR_QaskjKgvdqZiXeNFivs0tNfTwFev0u9yegEP1Uwdd32BTGotrVxtgw_c3YI9c0Lr3z3gHYG2KuUJQYoFA.webp",
    },
]

function ProfileCard(props){
    return(
        <div style={{display: "flex"}}>
            {profiles.map((li)=>{
                return(
                    <Card key={li.id} title={li.title} backgroundColor={li.color}>
                        <p>안녕하세요,{li.title}입니다.</p>
                        <p>{li.intro}</p>
                        <img src={li.src} style={{width: "300px"}}></img>
                    </Card>
                );
            })}
        </div>
    );


    // return(
    //     <Card title="Soo" backgroundColor="#4ea04e">
    //         <p>안녕하세요. 김규리입니다.</p>
    //         <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
    //     </Card>
    // );
}

export default ProfileCard;