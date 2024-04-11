// 서브 선택지 리스트
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    // border: 2px solid black;
    // border-radius: 30px;
    width: 20%;
    height: 10%;
    margin: 0.1%;
    margin-top: 0%;
    // background-color: black;
`;

const SubTitleText = styled.p`
    color: black;
    font-size: 17px;
    // font-weight: bold;

    &:hover {
        color: grey;
        font-weight: bold;
    }
`;

function SubListItem(props){
    const { list, onClick } = props;
    return (
        <Wrapper onClick={onClick}>
            <SubTitleText>{list.subListTitle}</SubTitleText>
        </Wrapper>
    )
}
export default SubListItem;