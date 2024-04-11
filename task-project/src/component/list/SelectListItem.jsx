// 선택지 리스트

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    // width: 10%;
    // height: 5px;

    cursor: pointer;
`;

const TitleText = styled.p`
    color: black;
    font-size: 20px;
    font-weight: bold;

    &:hover {
        color: grey;
    }
`;

function SelectListItem(props){
    const { select, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
            <TitleText>{select.title}</TitleText>
        </Wrapper>
    )
}
export default SelectListItem;