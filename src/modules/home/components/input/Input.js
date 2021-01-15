import React from 'react';
import './style.scss';

class Input extends React.Component{
    constructor(){
      super();
    };
    render(){
      return(
        <div className="input-group">
          <input id="inputSearch" className="from-control" placeholder="Nhập số điện thoại" type="text"></input>
          <button id="btnSearch" className="btn-control" type="button">Tư vấn gói website phù hợp</button>
        </div>
      );
    };
  }

  export default Input;