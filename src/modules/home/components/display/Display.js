import React from 'react';
import './style.scss';
import slide2 from '../../../../assets/images/slide2.svg';
import slide3 from '../../../../assets/images/slide3.svg';
import slide4 from '../../../../assets/images/slide4.svg';

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
export default Display;
