import React from "react";
import Comment from "./Comment";

const comments = [
    {
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/0/01/Jennie_for_Vogue_Taiwan.jpg",
        name: "제니",
        comment: "안녕하세요, 블랙핑크입니다.",
    },
    {
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/9/97/190924_Ros%C3%A9_attends_Yves_Saint_Laurent_Show_at_Paris_Fashion_Week_2019_%28retouched%29.png",
        name: "로제",
        comment: "리액트 재미있어요~!",
    },
    {
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/9/93/BLACKPINK%27s_Lisa_for_BULGARI_June_2023_01.jpg",
        name: "리사",
        comment: "저도 리액트 배워보고 싶어요!!",
    },
    {
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Jisoo_for_Marie_Claire_Korea_on_130123_%281%29.png",
        name: "지수",
        comment: "즐거운 리액트 시간~!~!",
    },
];

function CommentList(props){
    return(
        <div>
            {comments.map((comment)=> {
                return(
                    <Comment
                        imageURL={comment.imageURL}
                        name={comment.name}
                        comment={comment.comment}/>
                );
            })}
        </div>
    );
}

/*
function CommentList(props){
    return(
        <div>
            <Comment name={"제니"} comment={"안녕하세요, 블랙핑크입니다."}/>
            <Comment name={"로제"} comment={"리액트 재미있어요."}/>
            <Comment name={"리사"} comment={"블랙핑크 많이 사랑해주세요~"}/>
        </div>
    );
}
*/
export default CommentList;