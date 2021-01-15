import React from 'react';
import "./style.scss";

class Button extends React.Component{
    constructor(){
        super();
    };
    render(){
        return(
            <button className="h2"><a>{this.props.name}</a></button>
        );
    };
}

export default Button;