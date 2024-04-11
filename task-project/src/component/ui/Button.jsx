import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 4px 8px;
    font-size: 17px;
    // font-weight: bold;
    border: none;
    background-color: white;
    cursor: pointer;
`;

function Button(props) {
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;