import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Toolbar from '../ui/Toolbar';
import data from '../../data.json';
import SelectList from '../list/SelectList';
import SubList from '../list/SubList';


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
    flex-direction: row;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;


function SubListPage(props){
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // 로그인 여부 가져오기
    const { selectId } = useParams();
        
    const select = data.find((item) => {
        return item.id == selectId;
    });

    return (
        <Wrapper>
            <Container>
                <Toolbar
                    isLoggedIn = {isLoggedIn} // 로그인 여부 전달
                    pageTitle = {select.title}
                /> 
            <ContentContainer>
                <SelectList
                    selects={data}
                    onClickItem={(item) => {
                        navigate(`/select/${item.id}`);
                    }}
                />
                <SubList lists={select.lists}
                    onClickItem={(item) => {
                        navigate(`/select/${selectId}/${item.id}`);
                    }}
                />
            </ContentContainer>
            </Container>
        </Wrapper>
    )
}

export default SubListPage;