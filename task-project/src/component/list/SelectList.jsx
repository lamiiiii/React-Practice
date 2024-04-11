// 메인 페이지 선택 리스트 (장르별, 가수별, 게시판)

import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../ui/Button";
import styled from 'styled-components';
import SelectListItem from "./SelectListItem";

const Wrapper = styled.div`
    width: 11%;
    margin-top: 7%;
    max-width: 1500px;
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: flex-start;
    // border: 2px solid grey;
    border-radius: 10px;
    // background-color: black;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function SelectList(props){
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // 로그인 여부 가져오기
    const { selects, onClickItem } = props;
    const navigate = useNavigate();

    return(
        <Wrapper>
            {selects.map((select, index) => {
                return(
                    <SelectListItem
                        key = {select.id}
                        select={select}
                        onClick={() => {
                            onClickItem(select);
                        }}
                    />
                )
            })}
        </Wrapper>
    )
}

export default SelectList;