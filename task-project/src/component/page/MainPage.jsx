import React, { useState, useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';
    import styled from 'styled-components';
    // import Button from "../ui/Button";
    import Toolbar from "../ui/Toolbar";
    import SelectList from '../list/SelectList';
    import data from '../../data.json';

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

    const CContainer = styled.div`
    width: 100%;
    max-width: 1500px;
    display: flex;
    flex-direction: row;

    :not(:last-child) {
        margin-bottom: 16px;
    }
    `;

    const CommentContainer = styled.div`
        margin-left: 20%;
        margin-top: 16px;
    `;

    const CommentList = styled.ul`
        list-style: none;
        padding: 0;
    `;

    const CommentItem = styled.li`
        margin-bottom: 8px;
    `;

    const LikeListButton = styled.button`
    margin-top: 16px;
    padding: 8px 16px;
    background-color: pink;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: lightpink;
    }
`;

    function MainPage(props){
        const navigate = useNavigate();
        const isLoggedIn = localStorage.getItem('isLoggedIn'); // 로그인 여부 가져오기
        const [comments, setComments] = useState([]);
        const [newComment, setNewComment] = useState('');

        const handleCommentSubmit = () => {
            // 새로운 댓글을 comments에 추가
            setComments([...comments, { id: comments.length + 1, text: newComment }]);
            // 입력 폼 초기화
            setNewComment('');
          };
    
        return (
            <Wrapper>
                <Container>
                    <Toolbar
                        isLoggedIn = {isLoggedIn} // 로그인 여부 전달
                        pageTitle = {"Main"}
                    />
                <CContainer>
                    
                <SelectList
                        selects={data}
                        onClickItem={(item) => {
                            navigate(`/select/${item.id}`);
                        }}
                    />
        <CommentContainer>
          <h2>의견</h2>
          {isLoggedIn && (
            <div>
              <textarea
                rows="20"
                cols="80"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <br />
              <button onClick={handleCommentSubmit}>의견 작성</button>
            </div>
          )}
            <CommentList>
                {comments.map((comment) => (
                    <CommentItem key={comment.id}>{comment.text}</CommentItem>
                ))}
            </CommentList>
        </CommentContainer>
                </CContainer>
                </Container>
            </Wrapper>
        );
    }

    export default MainPage;