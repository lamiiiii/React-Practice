import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Toolbar from '../ui/Toolbar';
import data from '../../data.json';
import SelectList from '../list/SelectList';
import SubList from '../list/SubList';
import MusicList from '../list/MusicList';


const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 1500px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

const ContentContainer = styled.div`
    width: 100%;
    max-width: 1500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-Top: 2%;
    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

const CContainer = styled.div`
    width: 100%;
    // max-width: 1500px;
    display: flex;
    flex-direction: row;
`;
function MusicListPage(props){
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // 로그인 여부 가져오기

    const { selectId, subId } = useParams();

    const select = data.find((item) => {
        return item.id == selectId;
    });

    const sub = select.lists.find((item) => {
        return item.id == subId;
    })

    return (
        <Wrapper>
            <Container>
                <Toolbar
                    isLoggedIn = {isLoggedIn} // 로그인 여부 전달
                    pageTitle = {sub.subListTitle}
                />
            <CContainer>
            <SelectList
                    selects={data}
                    onClickItem={(item) => {
                        navigate(`/select/${item.id}`);
                    }}
                />
            <ContentContainer>
                <SubList lists={select.lists}
                    onClickItem={(item) => {
                        navigate(`/select/${selectId}/${item.id}`);
                    }}
                />
                <MusicList musicLists = {sub.musicLists}
                    onClickItem={(item) => {
                        navigate(`/select/detail/${selectId}/${subId}/${item.id}`);
                    }}
                />
            </ContentContainer>
            </CContainer>
            </Container>
        </Wrapper>
    )
}

export default MusicListPage;