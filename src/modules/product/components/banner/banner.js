import React from 'react';
import './style.scss';
import banner from '../../../../assets/images/banner.svg';

class Banner extends React.Component{
    constructor(){
      super();
    };
    render(){
      return(
        <div className="sigup-for-free">
          <img src={banner} alt=""/>
        </div>
      );
    };
  }

  export default Banner;