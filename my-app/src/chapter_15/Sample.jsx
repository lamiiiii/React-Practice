import React from "react";
import styled from "styled-components";

const Button = styled.button`
    color:grey;
    border: 2px solid paleviletred;
`;

// Button에 style이 추가된 RoundedButton 컴포넌트
const RoundedButton = styled(Button)`
    border-radius: 16px;
`;

function Sample(props){
    return(
        <div>
            <Button>Normal</Button>
            <RoundedButton>Rounded</RoundedButton>
        </div>
    )
}

export default Sample;