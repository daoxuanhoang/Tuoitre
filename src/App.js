import logo from './logo.svg';
import './App.css';
import './dropdownmenu/style.css'
import logoimg from './images/logotuoitre.svg';
import slide from './images/slide1s.svg';
import gift from './images/gif-boxt.jpg';
import banner from './images/banner.svg';
import globe from './images/globe.jpg';
import cloud from './images/cloud.jpg';
import setting from './images/setting.jpg';
import update from './images/update.jpg';
import slide2 from './images/slide2.svg';
import slide3 from './images/slide3.svg';
import slide4 from './images/slide4.svg';
import depot from './images/depot.svg';
import viezon from './images/viezon.svg';
import viken from './images/viken.svg';
import tca from './images/tca.svg';
import evn from './images/evn.svg';
import amway from './images/amway.svg';
import icontarget from './images/icontarget.svg';
import iconcontact from './images/iconcontact.svg';
import iconteam from './images/iconteam.svg';
import newscrm from './images/newscrm.svg';
import icongovernance from './images/icongovernance.svg';
import newscart from './images/newscart.svg';
import newsinnovate from './images/newsinnovate.svg';
import tuoitre from './images/tuoitre.svg';
import android from './images/android.svg';
import apple from './images/apple.svg';
import React from 'react';
import Dropdown from './dropdownmenu/Dropdown';
import { render } from '@testing-library/react';

function App() {
  return (
    <body>
      <header>
     <div className="header-wrap">
     <div className="logo">
        <a href="#" className="standard-logo active">
          <img src={logoimg} alt=""/>
          </a>
      </div>
      <div className="primary-menu-trigger">
       <Dropdown key="1" titleMain="Website theo yêu cầu" items={["Lưu trữ đám mây","Kho ứng dụng","Khuyến mãi"]}/>
       <Button name="Kho giao diện"/>
       <Dropdown key="2" className="dropdown-two" titleMain="Bảng giá" items={["Bảng giá website","Bảng giá dịch vụ nâng cấp & quản trị website","Bảng giá dịch vụ phát triển thương hiệu"]}/>
       <Button name="Giải pháp SME"/>
       <Button name="TTS News"/>
       <Button name="Sứ mệnh"/>
       <button className="account"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
      </svg>Đăng nhập</button>
      </div>
     </div>
      </header>
      <main>
        {/* <Title/> */}
        <Container/>
        <Banner/>
        <Services title="Sản phẩm và dịch vụ Tuổi trẻ Soft cung cấp đến quý khách hàng" content={["với sứ mệnh cung cấp giải pháp quản trị hiệu quả từ việc kết hợp nguồn lực hiện có của khách hàng và sự sáng tạo công nghệ,", "đồng thời hành cùng sự phồn thịnh của khách hàng. Đội ngũ Tuổi trẻ Soft quyết tâm mang đến giải pháp hỗ trợ kinh doanh tốt nhất"]}/>
        <Display/>
        <Depot/>
        <Sponsor/>
        <Solution/>
        <News title="Tin tức Tuoitre Soft" button="Xem thêm >>"/>
        <Counselors title="Thiết kế website chuyên nghiệp, gia tăng doanh số cho doanh nghiệp"/>
      </main>
      <footer>
        <FooterTop title={["Cung cấp giải pháp quản trị doanh nghiệp","Cung cấp giải pháp quản lý bán hàn POS","Lập trình ứng dụng di động Android, IOS","Cung cấp giải pháp Website ứng dụng","Dịch vụ lưu trữ đám mây cho doanh nghiệp"]}
        items={["Văn bản pháp lý","Giải quyết khiếu nại","Xử lý tranh chấp tên miền","Quy định sử dụng dịch vụ","Quy định sử dụng tên miền Việt Nam","Điều khoản bảo mật"]}/>
        <FooterMidle title="TRỤ SỞ CHÍNH:" content={["316 Lê Văn Sỹ","Phường 1, Quận Tân Bình, TP. Hồ Chí Minh","MST: 0314623823"]} title2="VĂN PHÒNG - TRUNG TÂM PHÁT TRIỂN PHẦN MỀM HỒ CHÍ MINH:"
        content2={["316 Lê Văn Sỹ","Phường 1, Quận Tân Bình, TP. Hồ Chí Minh","MST: 0314623823"]}/>
        <FooterBottom title={["Copyrights © 2017 All Rights Reserved by TuoiTreSoft.Com.","Terms of Use / Privacy Policy"]}/>
      </footer>
    </body>
  );
}

class Button extends React.Component{
  render(){
    return(
      <button className="h2"><a>{this.props.name}</a></button>
    );
  }
}

class Container  extends React.Component{
  constructor(){
    super();
  };
  render(){
    return(
      <div className="container">
          <div className="container-left">
          <div style={{float:"right"}}>
            <h1 className="title">TĂNG ĐIỂM VỚI KHÁCH HÀNG & ĐỐI TÁC <br></br>BẰNG WEBSITE CHUYÊN NGHIỆP</h1>
            <h1>Website - văn phòng thứ hai của mọi doanh nghiệp.</h1>
            <h1>Cách mạng 4.0, doanh nghiệp khẳng định thương hiệu trên môi trường online</h1>
          </div>
          <Input/>
          <Gift/>
          </div>
          <div className="container-right">
            <a href="#"><img src={slide} alt=""/></a>
          </div>
      </div>
    );
  };
} 

class Input extends React.Component{
  constructor(){
    super();
  };
  render(){
    return(
      <div className="input-group">
        <input id="inputSearch" className="from-control" placeholder="Nhập số điện thoại" type="text"></input>
        <button id="btnSearch" className="btn-control" type="button">Tư vấn gói website phù hợp</button>
      </div>
    );
  };
}

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

class Display extends React.Component{
  constructor(){
    super();
  };
  render(){
    return(
      <div className="display">
          <HomeDisplay value={'1'}/>
          <HomeDisplay value={'2'}/>
          <HomeDisplay value={'default'}/>
      </div> 
    );
  };
}

function HomeDisplay(props){
  switch(props.value){
    case '1':
      return(
        <div className="row">
            <div className="col-md-5">
              <b>Giao diện chuyên nghiệp</b>
              <ul>
                <li>Tốc độ tải trang nhanh dưới 3 giây, không có thời gian ngắt quãng.</li>
                <li>Giao diện, hình ảnh, màu sắc bắt mắt, thu hút được người truy cập.</li>
                <li>Bố cục Website khoa học, trình bày thông tin đầy đủ, hợp lý, không rườm rà và dư thừa, phù hợp với nhu cầu Khách hàng đối tác của Doanh nghiệp hướng đến.</li>
                <li>Chức năng tin gọn, tập trung vào nhu cầu cần thiết nhất cho Khách hàng của doanh nghiệp sử dụng và đúng ý đồ kinh doanh của doanh nghiệp.</li>
                <li>Mang tính thương hiệu cao, mang lại lợi ích kinh doanh của doanh nghiệp, là công cụ hỗ trợ đắc lực giúp doanh nghiệp tăng doanh số và tiết kiệm thời gian, chi phí.</li>
              </ul>
              <button>Xem thêm kho giao diện</button>
            </div>
            <div className="col-md-5">
                <img src={slide2} alt=""/>
            </div>
        </div>
      )
    case '2':
      return(
        <div className="row">
            <div className="col-md-5">
                <img src={slide3} alt=""/>
            </div>
            <div className="col-md-5">
              <b>Thiết kế website chuẩn di động đa dạng thiết bị hiển thị</b>
              <ul>
                <li>Website hiển thị đẹp mắt trên tất cả các thiết bị và đem lại trải nghiệm thoải mái, thuận tiện nhất cho người dùng.</li>
                <li>Thời gian tải trang ngắn với thiết kế chuẩn Responsive, tốn ít dung lượng data di động.</li>
                <li>Hiển thị thông tin đầy đủ như phiên bản máy tính, tối ưu thông tin quan trọng của doanh nghiệp luôn xuất hiện trong tầm mắt khách hàng.</li>
                <li>Tính năng tương tác nhanh cho người dùng di động đầy đủ: gọi điện, nhắn tin nhanh Zalo, message, email...</li>
              </ul>
              <button>Đăng ký ngay</button>
            </div>
        </div>
      )
      default:
        return(
          <div className="row">
            <div className="col-md-5">
              <b>Xử lý đơn hàng mọi lúc mọi nơi</b>
              <ul>
                <li>Tích hợp API giữa website bán hàng của bạn với ứng dụng/website khác để vận hành thuận tiện và nhanh chóng, hiệu quả kinh doanh tăng cho doanh nghiệp.</li>
                <li>Tối ưu User Interface và User Experience cho website của doanh nghiệp, tăng trải nghiệm của khách hàng ghé thăm website, tỷ lệ mua hàng tăng cao.</li>
                <li>Chuẩn SEO, tối ưu hóa tìm kiếm đúng chuẩn Google.</li>
                <li>Liên kết với mạng xã hội Facebook, Zalo, Chatbox...</li>
                <li>Quản lý đơn hàng ngay trên thiết bị di động, công việc kinh doanh của bạn trở lên đơn giản với giải pháp của Tuổi Trẻ Soft cung cấp.</li>
              </ul>
              <button>Đăng ký trải nghiệm miễn phí</button>
            </div>
            <div className="col-md-5">
                <img className="img" src={slide4} alt=""/>
            </div>
        </div>
        )
  }
}

class Depot extends React.Component{
  constructor(){
    super();
  };
  render(){
    return(
      <div className="depot">
        <div className="heading-wrap">
          <ul>
            <li className="heading-before">Kho giao diện website hiện đại và chuyên nghiệp</li>
            <li className="heading-after">Thế mạnh Tuổi Trẻ Soft là lập trình website Framework, chúng em tự tin thiết kế ra sản phẩm theo đúng yêu cầu từ anh chị.</li>
          </ul>
        </div>
        <div className="container">
          <div className="fbox-icon">
            <img src={depot} alt=""/>  
          </div>
          <div className="fbox-btn">
            <button>XEM NGAY</button>
          </div>
        </div>
      </div>
    );
  }
}

class Sponsor extends React.Component{
  constructor(){
    super();
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

class Counselors extends React.Component{
  constructor(){
    super();
  };
  render(){
    return(
      <div className="slider-box">
        <div className="text">
          <span>{this.props.title}</span>
        </div>
         <div className="container clear-fix">
          <Input/>
         </div>
      </div>
    );
  }
}

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
             return <li>{e}</li>
           })}
          </ul>
        </div>
        <div className="col-md-4">
           <ul>
             <li className="fbox-desc">CHĂM SÓC KHÁCH HÀNG</li>
             {this.props.items.map(e=>{
               return <li>{e}</li>
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
class FooterMidle extends React.Component{
  constructor(){
    super();
  };
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
class FooterBottom extends React.Component{
  constructor(){
    super();
  };
  render(){
    return(
      <div className="copy-right">
          <div className="col-md-3">
            <ul>
              {this.props.title.map(e=>{
                return <li>{e}</li>
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
export default App;

