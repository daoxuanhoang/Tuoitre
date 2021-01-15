import React from 'react';
import './style.scss';
import gift from '../../../../assets/images/gif-boxt.jpg';

class Gift extends React.Component{
    constructor(){
      super();
    };
    render(){
      return(
        <div className="gift-box">
          <div className="gift-box-media">
          <img src={gift} alt=""/>
          </div>
            <p className="gift-box-text">Từ ngày 01/01/2021, khách hàng thiết kế website tại Tuổi trẻ  Soft miễn phí phần mềm quản lý chuỗi cửa hàng tích hợp. <a href="#">Xem ngay..</a>.</p>
            
          
        </div>
      );
    };
}

export default Gift;