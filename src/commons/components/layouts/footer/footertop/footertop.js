import React from 'react';
import './style.scss';
import tuoitre from '../../../../../assets/images/tuoitre.svg';
import android from '../../../../../assets/images/android.svg';
import apple from '../../../../../assets/images/apple.svg';

class FooterTop extends React.Component{
    constructor(){
      super();
    };
    render(){
      return(
        <div className="row">
          <div className="col-md-3">
            <img src={tuoitre} alt=""/>
            <ul>
             {this.props.title.map(e=>{
               return <li key={e}>{e}</li>
             })}
            </ul>
          </div>
          <div className="col-md-4">
             <ul>
               <li className="fbox-desc">CHĂM SÓC KHÁCH HÀNG</li>
               {this.props.items.map(e=>{
                 return <li key={e}>{e}</li>
               })}
             </ul>
          </div>
          <div className="col-md-3">
             <div className="fbox-desc">
              <span>TẢI ỨNG DỤNG TTS MOBILE</span>
             </div>
              <div className="fbox-icon">
                <img src={android} alt=""/>
                <img src={apple} alt=""/>
              </div>
          </div>
        </div>
      );
    };
}

export default FooterTop;