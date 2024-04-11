// 음악 리스트
import React from 'react';
import styled from 'styled-components';
import MusicListItem from './MusicListItem';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function MusicList(props){
    const { musicLists, onClickItem } = props;

    return (
        <Wrapper>
            {musicLists.map((musicList, index) => {
                return(
                    <MusicListItem
                        key={musicList.id}
                        musicList = {musicList}
                        onClick={()=>{
                            onClickItem(musicList)
                        }}
                    />
                )
            })}
        </Wrapper>
    )
}

export default MusicList;

