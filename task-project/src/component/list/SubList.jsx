// 메인 페이지 선택 리스트 (장르별, 가수별, 게시판)

import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SubListItem from "./SubListItem";

const Wrapper = styled.div`
    width: 100%;
    max-width: 1500px;
    display: flex;
    flex-direction: row;
    align-item: center;
    justify-content: center;
    margin: 2%;
    cursor: pointer;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function SubList(props){
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // 로그인 여부 가져오기
    const { lists, onClickItem } = props;
    const navigate = useNavigate();

    return(
        <Wrapper>
            {lists.map((list, index) => {
                return(
                    <SubListItem
                        key = {list.id}
                        list={list}
                        onClick={() => {
                            onClickItem(list);
                        }}
                    />
                )
            })}
        </Wrapper>
    )
}

export default SubList;