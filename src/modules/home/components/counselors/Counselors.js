import React from 'react';
import './style.scss';
import Input from '../input/Input';

class Counselors extends React.Component{
    constructor(){
      super();
    };
    render(){
      return(
        <div className="slider-box">
          <div className="text">
            <span>{this.props.title}</span>
          </div>
           <div className="container clear-fix">
            <Input/>
           </div>
        </div>
      );
    }
}

export default Counselors;