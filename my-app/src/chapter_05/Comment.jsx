import React from "react";

const styles = {
    wrapper:{
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid lightpink",
        borderRadius: 16,
        backgroundColor: "lightyellow",
    },

    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

function Comment(props){
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img alt=""
                    src={props.imageURL}
                    /*src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"*/
                    style={styles.image}
                />
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>

{/**            <span style={styles.nameText}>김규리</span>
                <span style={styles.commentText}>제가 만든 첫 컴포넌트입니다.</span>
*/} 
            </div>
        </div>
    );
}

export default Comment;