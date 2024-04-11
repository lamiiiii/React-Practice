// Notification.jsx 응용 과제
import React from "react";

const styles = {
    wrapper:{
        margin:8,
        padding:8,
        display:"flex",
        flexDirection:"row",
        border:"5px dotted lightblue",
        borderRadius:20,
    },
    imageContainer:{

    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer:{
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText:{
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
        messageText: {
            color:"black",
            fontSize:16,
        },
    };
    
class Notification extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    componentDidMount(){ // 주기
        console.log(`${this.props.id} componentDidMount() called.`);
    }
    componentDidUpdate(){
        console.log(`${this.props.id} componentDidUpdate() called.`);
    }
    componentWillUnmount(){
        console.log(`${this.props.id} componentWillUnmount() called.`);
    }
    render(){
        return (
            <div style={styles.wrapper}>
                <div style={styles.imageContainer}>
                    <img alt=""
                    src={this.props.imageURL}
                    /*src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"*/
                    style={styles.image}
                />
            </div>

            <div style={styles.contentContainer}>
            <span style={styles.nameText}>{this.props.name}</span>
            <span style={styles.messageText}>{this.props.message}</span>
            </div>
            </div>
            );
        }
    }
export default Notification;
