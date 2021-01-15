import React from 'react';
import './style.scss';
import icontarget from '../../../../assets/images/icontarget.svg';
import iconcontact from '../../../../assets/images/iconcontact.svg';
import iconteam from '../../../../assets/images/iconteam.svg';
import icongovernance from '../../../../assets/images/icongovernance.svg';

class Solution extends React.Component{
    constructor(){
      super();
    };
    render(){
      return(
        <div style={{width:"100%",textAlign:"center", paddingTop:"30px"}}>
          <span style={{fontSize:"30px", fontWeight:"700"}}>Tại sao giải pháp do Tuổi Trẻ Soft được khách hàng tin dùng?</span>
        <div className="row">
          <div className="container">
            <div className="fbox-media">
                <img src={icontarget} alt=""/>
            </div>
            <div className="fbox-desc">
              <ul>
                <li className="ls0">ĐƠN GIẢN - HIỆU QUẢ</li>
                <li className="mt-2">Quản lý dịch vụ, tài nguyên với các thao tác đơn giản giúp nâng cao hiệu quản cho website của doanh nghiệp!</li>
              </ul>
            </div>
          </div>
            <div className="container">
              <div className="fbox-media">
                  <img src={iconcontact} alt=""/>
              </div>
              <div className="fbox-desc">
                <ul>
                  <li className="ls0">HẬU QUẢ KHÔNG GIỚI HẠN</li>
                  <li className="mt-2">Nhận ngay quà tặng bất ngờ cho các ngày kỷ niệm đặc biệt của bạn - với phương châm dùng càng nhiều -  Giá Càng Rẻ</li>
                </ul>
              </div>
            </div>
            <div className="container">
              <div className="fbox-media">
                  <img src={icongovernance} alt=""/>
              </div>
              <div className="fbox-desc">
                <ul>
                  <li className="ls0">QUẢN TRỊ TÀI KHOẢN Ở MỌI NƠI</li>
                  <li className="mt-2">Dễ dàng quản lý tài khoản, dịch vụ của bạn ở mọi nơi trên website/ Mobile App với chức năng bảo mật 2 lớp</li>
                </ul>
              </div>
            </div>
            <div className="container">
              <div className="fbox-media">
                  <img src={iconteam} alt=""/>
              </div>
              <div className="fbox-desc">
                <ul>
                  <li className="ls0">ĐỘI NGŨ KỸ THUẬT TRẺ - NĂNG ĐỘNG</li>
                  <li className="mt-2">Sẵn sàng hỗ trợ khách hàng liên tục 24/24, đảm bảo vận hành cho website luôn luôn ontime trên 99,99 %</li>
                </ul>
              </div>
            </div>
        </div>
        </div>
      );
    };
}

export default Solution;