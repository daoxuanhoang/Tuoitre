import React from 'react';
import './style.scss';
import newscrm from '../../../../assets/images/newscrm.svg';
import newscart from '../../../../assets/images/newscart.svg';
import newsinnovate from '../../../../assets/images/newsinnovate.svg';


class News extends React.Component{
    constructor(){
      super();
    };
    render(){
      return(
          <div className="news">
            <div className="heading-block">
              <span>{this.props.title}</span>
            </div>
            <div className="row">
              <div className="container">
                  <div className="fbox-icon">
                    <img src={newscrm} alt=""/>
                  </div>
                  <div className="fbox-desc">
                    <span>Hàng loạt tính năng mới độc đáo, hấp dẫn giúp shop tăng đơn hàng</span>
                  </div>
                  <div className="fbox-btn">
                    <a href="#">{this.props.button}</a>
                  </div>
              </div>
              <div className="container">
                  <div className="fbox-icon">
                    <img src={newscart} alt=""/>
                  </div>
                  <div className="fbox-desc">
                    <span>Công cụ quản lý bán hàng tại quầy và online, tích hợp vận chuyển, quản lý vận đơn và các tiện ích hỗ trợ.</span>
                  </div>
                  <div className="fbox-btn">
                    <a href="#">{this.props.button}</a>
                  </div>
              </div>
              <div className="container">
                  <div className="fbox-icon">
                    <img src={newsinnovate} alt=""/>
                  </div>
                  <div className="fbox-desc">
                    <span>Website bán hàng hiển thị tồn kho sản phẩm theo khu vực</span>
                  </div>
                  <div className="fbox-btn">
                    <a href="#">{this.props.button}</a>
                  </div>
              </div>
            </div>
          </div>
      );
    };
}

export default News;