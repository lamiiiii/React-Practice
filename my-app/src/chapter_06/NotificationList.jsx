import React from "react";
import Notification from "./Notification";

const reservedNotifications = [  // 데이터가 여러개라면 구분할 수 있게 해라
    {
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg",
        name: "댕댕이",
        id:1, // id값을 써도 속성값은 key값으로 불러와야 함
        message:"안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/a/af/Cara_de_quem_caiu_do_caminh%C3%A3o..._%28cropped%29.jpg",
        name: "비글",
        id:2,
        message:"점심식사 시간입니다.",
    },
    {
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/fa/AG_Cody.jpg",
        name: "비숑",
        id:3,
        message:"이제 곧 미팅이 시작됩니다.",
    },
    {
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Poodel-Standard.jpg",
        name: "우아한 강아지", 
        id:4,
        message: "배고파요.",
    },
    {
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Labrador-retriever.jpg",
        name: "리트리버",
        id:5,
        message: "저녁식사 시간입니다.",
    },
    {
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Korean_Jindo_Dog.jpg",
        name: "진돗개",
        id:6,
        message: "수업을 시작하겠습니다.",
    },
    {
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Goldilocks.gif",
        name: "스피츠",
        id:7,
        message: "오늘 수업은 여기까지입니다.",
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            notifications:[],   // state에 넣어서 초기화
        };
    }

    componentDidMount(){
        const {notifications}=this.state;
        timer = setInterval(()=>{
            if (notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]); // push함수는 stack이용 (나중에 들어가는 것이 제일 위에)
                this.setState({
                    notifications: notifications,
                });
            } else{
                this.setState({ //값을 직접적으로 바꿀 수 없고 setState 함수를 통해 변경 가능
                    notifications: [], // Notifications 비우기
                });
                clearInterval(timer);
            }
        }, 1000);
    }
    render(){
        return(
            <div>
                {this.state.notifications.map((notification)=>{
                    return (
                            <Notification 
                                imageURL={notification.imageURL}
                                name={notification.name}
                                key={notification.id} // rendering할 때는 꼭 key값으로 데려와야 함
                                id={notification.id}
                                message={notification.message}/>
                            );
                })}
            </div>
        );
    }
}
export default NotificationList;