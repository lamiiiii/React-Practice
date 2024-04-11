import React from "react";

// 컨텍스트는 데이터를 매번 컴포넌트를 통해 전달할 필요 없이 컴포넌트 트리로 곧바로 전달하게 해줌
// 여기에서는 현재 테마를 위한 컨텍스트를 생성하며, 기본값은 'Light'입니다.
const ThemeContext = React.createContext('Light');


// Provider를 사용하여 하위 컴포넌트들에게 현재 테마 데이터를 전달
// 모든 하위 컴포넌트들은 컴포넌트 트리 하단에 얼마나 깊이 있는지에 관계없이 데이터를 읽을 수 있다.
// 여기에서는 현재 테마 값으로 'dark'를 전달 하고 있다.
function App(props){
    return(
        <ThemeContext.Provider value="dark">
            <Toolbar/>
        </ThemeContext.Provider>
    );
    // return <Toolbar theme="dark"/>;
}

// 이제 중간에 위치한 컴포넌트는 테마 데이터를 하위 컴포넌트로 전달할 필요가 없다.
function Toolbar(props){
    // 이 Toolbar 컴포넌트는 TimedButton에 time을 넘겨주기 위해서 'theme' props를 가져야만 한다.
    // 현재 테마를 알아야 하는 모든 버튼에 대해서 props로 전달하는 것은 굉장히 비효율적

    return(
        <div>
            <ThemedButton/>
            {/* <ThemedButton theme={props.theme}/> */}
        </div>
    );
}


function ThemedButton(props){
    // 리액트는 가장 가까운 상위 테마 Provider를 찾아서 해당되는 값을 사용
    // 만약 해당되는 Provider가 없을 경우 기본값(여기에서는 'Light'를 사용)
    // 여기에서는 상위 Provider가 있기 때문에 현재 테마의 값은 'dark'

    return(
        <ThemeContext.Consumer>
            { value => <Button theme={value} />}
        </ThemeContext.Consumer>
    );

    // 이전 코드
    // return(
    //     <div>
    //         <Button theme={props.theme}/>
    //     </div>
    // )
}

function Button(props){
    return <button>{props.theme}</button>
}

export default App;