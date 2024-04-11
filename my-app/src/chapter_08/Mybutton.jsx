// import React from "react";

// class Mybutton extends React.Component {
//     handleClick = () => {
//         console.log('this is:', this);
//     }

//     render(){
//         return(
//             <button onClick={this.handleClick}>
//                 클릭
//             </button>
//         );
//     }
// }

// export default Mybutton;

import React from "react";

class Mybutton extends React.Component {
    handleClick (){
        console.log('this is:', this);
    }

    render(){
        return(
            <button onClick={() => this.handleClick}>
                클릭
            </button>
        );
    }
}

export default Mybutton;