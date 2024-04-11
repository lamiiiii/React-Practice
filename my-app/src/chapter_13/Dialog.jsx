import FancyBorder from "./FancyBorder";

function Dialog(props){
    return(
        <FancyBorder color="blue">
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
            {props.children}
            {/* Specialization의 개념을 사용하여 하위 children input과 button에 전달 */}
        </FancyBorder>
    );
}

export default Dialog;