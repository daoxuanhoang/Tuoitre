import React from 'react';
import './style.scss';
import globe from '../../../../assets/images/globe.jpg';
import cloud from '../../../../assets/images/cloud.jpg';
import setting from '../../../../assets/images/setting.jpg';
import update from '../../../../assets/images/update.jpg';

class Services extends React.Component{
    constructor(){
      super();
    };
    render(){
      return(
        <div className="services">
          <div className="services-top">
            <ul className="services-text">
                <li className="title">{this.props.title}</li>
                {
                  this.props.content.map(e=>{
                    return <li className="content">{e}</li>
                  })
                }
            </ul> 
          </div>
          <div className="row">
              <SwitchCase value={'Website'} button="Xem thêm >>"/>
              <SwitchCase value={'Hosting'} button="Xem thêm >>"/>
              <SwitchCase value={'UpdateWebsite'} button="Xem thêm >>"/>
              <SwitchCase value={'default'} button="Xem thêm >>"/>
          </div>
        </div>
      );
    };
  }
  function SwitchCase(props){
    switch(props.value){
      case 'Website':
        return(
          <div className="container">
              <div className="fbox-icon">
                  <img src={globe} alt=""/>
              </div>
            <div className="fbox-desc">
             <ul>
             <li className="desc-title">Website</li>
              <li className="desc-content">Sở hữu một Website, landingpage chuẩn SEO, giao diện responsive với đầy đủ tính năng bán hàng online. Tích hợp phần mềm quản lý bán hàng miễn phí.</li>
             </ul>
            </div>
            <div className="fbox-btn">
              <a href="#">{props.button}</a>
            </div>
        </div>  
        )
      case 'Hosting':
        return(
          <div className="container">
          <div className="fbox-icon">
            <img className="icon-cloud" src={cloud} alt=""/>
          </div>
         <div className="fbox-desc">
           <ul>
              <li className="desc-title">Hosting</li>
              <li className="desc-content">Hosting Chất Lượng Cao là dịch vụ Web Hosting chuyên nghiệp chất lượng cao dành cho website thương mại điện tử. Chạy nhanh, chịu tải lớn, ổn định trước những thời diểm truy cập lớn</li>
           </ul>
         </div>
         <div className="fbox-btn">
          <a href="#">{props.button}</a>
         </div>
        </div> 
        )
      case 'UpdateWebsite':
        return(
          <div className="container">
            <div className="fbox-icon">
              <img src={setting} alt=""/>
            </div>
          <div className="fbox-desc">
            <ul>
            <li className="desc-title">Nâng cấp Website</li>
            <li className="desc-content">Tuổi trẻ Soft sẵn sàng nhận chỉnh sửa code, nâng cấp website, chỉnh sửa giao diện website theo mọi yêu cầu, cam kết 100% khách hàng hài lòng.</li>
            </ul>
          </div>
          <div className="fbox-btn">
            <a href="#">{props.button}</a>
          </div>
        </div>
        )
      default:
        return(
          <div className="container">
            <div className="fbox-icon">
              <img src={update} alt=""/>
            </div>
          <div className="fbox-desc">
            <ul>
              <li className="desc-title">Lập trình giải pháp</li>
              <li className="desc-content">Bạn đang cần giải quyết vấn đề quản lý cho doanh nghiệp của mình nhằm cải thiện hoạt động quản lý, điều hành và nâng cao hiệu quả sản xuất kinh doanh. Tuổi trẻ Soft sẵn sàng đồng hành...</li>
            </ul>
          </div>
          <div className="fbox-btn">
            <a href="#">{props.button}</a>
          </div>
        </div>
        )
    }
  }

  export default Services;