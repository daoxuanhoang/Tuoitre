import React from 'react';
import './style.scss';

class FooterBottom extends React.Component{
    constructor(){
      super();
    };
    render(){
      return(
        <div key={this.props.title.id} className="copy-right">
            <div className="col-md-3">
              <ul>
                {this.props.title.map(e=>{
                  return <li key={e}>{e}</li>
                })}
              </ul>
            </div>
            <div className="col-md-4">
                <span>Số điện thoại tiếp nhận khiếu nại: 0974 333 052</span>
            </div>
        </div>
      );
    };
}

export default FooterBottom;