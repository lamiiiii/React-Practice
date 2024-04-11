import React, { useState, useEffect }  from 'react';
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

const MusicImage = styled.img`
    max-width: 100%;
    width: 20%;
    border-radius: 8px;
    margin-bottom: 8px;
`;

const MusicTitleText = styled.p`
    font-size: 20px;
    font-weight: bold;
    white-space: pre-wrap;
    
`;

const MusicSingerText = styled.p`
    font-size: 14px;
    color: grey;
`;

const MusicDateText = styled.p`
    font-size: 17px;
    color: black;
`;

const LikeButton = styled.button`
    margin-top: 16px;
    padding: 8px 16px;
    background-color: lightpink;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: pink;
    }
`;

const PlayButton = styled.button`
    margin-top: 16px;
    padding: 8px 16px;
    background-color: lightblue;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: skyblue;
    }
`;


function MusicDetailPage(props){
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // 로그인 여부 가져오기

    const { selectId, subId, musicId } = useParams();

    const select = data.find((item) => {
        return item.id == selectId;
    });

    const sub = select.lists.find((item) => {
        return item.id == subId;
    })

    const music = sub.musicLists.find((item) => {
        return item.id == musicId;
    })
    
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        // 페이지 로드 시 좋아요 상태를 확인하고 업데이트
        const likedMusicIds = JSON.parse(localStorage.getItem('likedMusicIds')) || [];
        setLiked(likedMusicIds.includes(music.id));
    }, [music.id]);

    const handleLikeClick = () => {
        // 좋아요 버튼 클릭 시 로컬 스토리지에 좋아요 정보 저장
        const likedMusicIds = JSON.parse(localStorage.getItem('likedMusicIds')) || [];
        const likedMusicDetails = JSON.parse(localStorage.getItem('likedMusicDetails')) || [];


        if (liked) {
            // 이미 좋아요한 경우 좋아요 취소
            const updatedLikes = likedMusicIds.filter((id) => id !== music.id);
            const updatedDetails = likedMusicDetails.filter((item) => item.id !== music.id);
            localStorage.setItem('likedMusicIds', JSON.stringify(updatedLikes));
            localStorage.setItem('likedMusicDetails', JSON.stringify(updatedDetails));
        } else {
            // 좋아요하지 않은 경우 좋아요 추가
            const updatedLikes = [...likedMusicIds, music.id];
            const updatedDetails = [...likedMusicDetails, { id: music.id, title: music.musicTitle }];
            localStorage.setItem('likedMusicIds', JSON.stringify(updatedLikes));
            localStorage.setItem('likedMusicDetails', JSON.stringify(updatedDetails));
        }

        // 좋아요 상태 업데이트
        setLiked(!liked);
    };
    
    const handlePlayClick = () => {
        // 재생 버튼 클릭 시 음악 재생
        window.location.href = music.playUrl;
    };


    return (
        <Wrapper>
            <Container>
                <Toolbar
                    isLoggedIn = {isLoggedIn} // 로그인 여부 전달
                    pageTitle = {music.musicTitle}
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
                <MusicImage src={music.imageUrl}  alt={music.musicTitle} />
                <MusicTitleText>{music.musicTitle}</MusicTitleText>  
                <MusicSingerText>{music.singer}</MusicSingerText>
                <MusicDateText>{music.date}</MusicDateText>
                {isLoggedIn && (
                    <LikeButton onClick={handleLikeClick}>
                        {liked ? '좋아요 취소' : '좋아요'}
                    </LikeButton>
                )}
                <PlayButton onClick={handlePlayClick}>재생</PlayButton>
            </ContentContainer>
            </CContainer>
            </Container>
        </Wrapper>
    )
}

export default MusicDetailPage;