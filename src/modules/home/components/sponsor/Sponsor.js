import React from 'react';
import './style.scss';
import viezon from '../../../../assets/images/viezon.svg';
import viken from '../../../../assets/images/viken.svg';
import tca from '../../../../assets/images/tca.svg';
import evn from '../../../../assets/images/evn.svg';
import amway from '../../../../assets/images/amway.svg';

class Sponsor extends React.Component{
    constructor(){
      super();
      // var images =[]
    };
    render(){
      return(
        <div className="primary-banner-container">
            <img style={{width:"10%"}} src={viezon} alt="" />
            <img style={{width:"10%"}} src={tca} alt="" />
            <img style={{width:"10%"}} src={evn} alt="" />
            <img style={{width:"10%"}} src={viken} alt="" />
            <img style={{width:"10%"}} src={amway} alt="" />
        </div>
      );
    };
}

export default Sponsor;