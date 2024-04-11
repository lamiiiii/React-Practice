// 음악 리스트
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 8px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    border-radius: 8px;
    cursor: pointer;
    background: white;

    &:hover {
        border-color: lightgrey;
    }
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

function MusicListItem(props){
    const { musicList, onClick } = props;

    return(
        <Wrapper onClick={onClick}>
            <MusicImage src={musicList.imageUrl}  alt={musicList.musicTitle} />
            <MusicTitleText>{musicList.musicTitle}</MusicTitleText>  
            <MusicSingerText>{musicList.singer}</MusicSingerText>
        </Wrapper>
    )
}

export default MusicListItem;