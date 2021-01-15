import React from 'react';
import './style.scss';

class FooterMidle extends React.Component{
    // constructor(){
    //   super();
    // };
    render(){
      return(
        <div className="row-wrap">
          <div className="col-md-3">
            <ul>
              <li className="local">{this.props.title}</li>
              {this.props.content.map(e=>{
                return <li className="title">{e}</li>
              })}
              <li className="content">Hotline: 0909545966</li>
              <li className="content">Email: info@tuoitresoft.vn</li>
            </ul>
          </div>
          <div className="col-md-4">
              <ul>
                <li className="local">{this.props.title2}</li>
                {this.props.content2.map(e=>{
                  return <li className="title">{e}</li>
                })}
                <li className="content">Hotline: 0909545966</li>
                <li className="content">Email: info@tuoitresoft.vn</li>
              </ul>
          </div>
        </div>
      );
    };
  }

  export default FooterMidle;