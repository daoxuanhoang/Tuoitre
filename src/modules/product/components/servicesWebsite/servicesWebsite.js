import React from 'react';
import './style.scss';
import starter from '../../../../assets/images/product/starter.svg';
import basic from '../../../../assets/images/product/basic.svg';
import profesional from '../../../../assets/images/product/profesional.svg';
import enterprise from '../../../../assets/images/product/enterprise.svg';

class ServicesWebsite extends React.Component{
    constructor(){
      super();
    };
    render(){
      return(
        <div className="services">
          <div className="services-top">
            <ul className="services-text">
                <li className="title">{this.props.title}</li>
                <li className="content">Chỉ từ <a href="#" alt="">290.000đ</a> Quý khách sở hữu ngay website cao cấp - chuẩn SEO - hiển thị đa dạng thiết bị di động phổ biến trên thị trường</li>
            </ul> 
          </div>
          <div className="row">
              <SwitchCase value={'1'}/>
              <SwitchCase value={'2'}/>
              <SwitchCase value={'3'}/>
              <SwitchCase value={'default'}/>
          </div>
        </div>
      );
    };
  }
  function SwitchCase(props){
    switch(props.value){
      case '1':
        return(
          <div className="container">
              <div className="fbox-icon">
                  <img src={starter} alt=""/>
              </div>
            <div className="fbox-desc">
             <ul>
             <li className="desc-title">Starter</li>
             <li className="desc-title"><a href="#">290.000đ/ tháng</a></li>
              <li className="desc-content">Chuẩn SEO, tối ưu hóa tìm kiếm tìm kiếm đúng chuẩn Google. Dễ dàng đăng bài viết hướng đến khách hàng doanh nghiệp. Tích hợp live chat ngay trên website.</li>
             </ul>
            </div>
            <div className="fbox-btn">
              <button>Tư vấn ngay</button>
            </div>
        </div>  
        )
      case '2':
        return(
          <div className="container">
          <div className="fbox-icon">
            <img className="icon-cloud" src={basic} alt=""/>
          </div>
         <div className="fbox-desc">
           <ul>
              <li className="desc-title">Basic</li>
              <li className="desc-title"><a href="#">549.000đ/ tháng</a></li>
              <li className="desc-content">Giao diện bắt mắt, hiện đại và chuyên nghiệp nhất cho doanh nghiệp. Website được thiết kế đa nền tảng, phù hợp với mọi thiết bị di động</li>
           </ul>
         </div>
         <div className="fbox-btn">
            <button>Tư vấn ngay</button>
         </div>
        </div> 
        )
      case '3':
        return(
          <div className="container">
            <div className="fbox-icon">
              <img src={profesional} alt=""/>
            </div>
          <div className="fbox-desc">
            <ul>
            <li className="desc-title">Profesional</li>
            <li className="desc-title"><a href="#">799.000đ/ tháng</a></li>
            <li className="desc-content">Tích hợp công cụ quản lý bán hàng đa chi nhánh. Dễ dàng tùy chỉnh nội dung đăng tải và thông tin sản phẩm giúp doanh nghiệp làm chủ 100% công việc kinh doanh.</li>
            </ul>
          </div>
          <div className="fbox-btn">
            <button>Tư vấn ngay</button>
          </div>
        </div>
        )
      default:
        return(
          <div className="container">
            <div className="fbox-icon">
              <img src={enterprise} alt=""/>
            </div>
          <div className="fbox-desc">
            <ul>
              <li className="desc-title">Enterprise</li>
              <li className="desc-title"><a href="#">Báo gái sau tư vấn</a></li>
              <li className="desc-content">Thiết kế theo đặc thù ngành nghề kinh doanh của doanh nghiệp. Thiết kế website code thuần sẵn sàng mở rộng quy mô trong tương lai cho doanh nghiệp. </li>
            </ul>
          </div>
          <div className="fbox-btn">
            <button>Tư vấn ngay</button>
          </div>
        </div>
        )
    }
  }

  export default ServicesWebsite;