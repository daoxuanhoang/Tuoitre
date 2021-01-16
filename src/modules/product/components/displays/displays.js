import React from 'react';
import './style.scss';
import display1 from '../../../../assets/images/product/display1.svg'
import display2 from '../../../../assets/images/product/display2.svg'
import display3 from '../../../../assets/images/product/display3.svg'

class Display extends React.Component{
    render(){
        return(
            <div className="display">
                <SwitchDisplay value={'1'}/>
                <SwitchDisplay value={'2'}/>
                <SwitchDisplay value={'default'}/>
            </div>
        );
    }
}
 function SwitchDisplay(props){
     switch(props.value){
         case "1":
             return(
                <div className="row">
                    <div className="col-md-5">
                    <b>Thiết kế website</b>
                    <ul>
                        <li>Kho giao diện chuyên nghiệp cho đa dạng ngành nghề kinh doanh. Liên tục thiết kế và cập nhật phong cách giao diện mới nhất, hiện đại nhất. </li>
                        <li>Tinh chỉnh nhanh chóng theo ý tưởng của khách hàng.</li>
                        <li>Công nghệ thiết kế đa nền tảng. Chuẩn SEO tối ưu theo Google.</li>
                        <li>Chức năng tinh gọn, tập trung vào nhu cầu cần thiết nhất cho Khách hàng của doanh nghiệp sử dụng và đúng ý đồ kinh doanh của doanh nghiệp.</li>
                        <li>Tối ưu User Interface và User Experience cho website của doanh nghiệp, tăng trải nghiệm của khách hàng ghé thăm website, tỷ lệ mua hàng tăng cao.</li>
                    </ul>
                    <button className="btn-n1">Xem thêm kho giao diện</button>
                    </div>
                    <div className="col-md-5">
                        <img src={display1} alt=""/>
                    </div>
                </div>
            )
        case "2":
            return(
                <div className="row">
                    <div className="col-md-5">
                        <img className="fbox-img" src={display2} alt=""/>
                    </div>
                    <div className="col-md-5">
                        <b>Lập trình web - app</b>
                        <ul>
                            <li>Bảo mật cực cao, tính ổn định của giải pháp lập trình web code tay mang lại an tâm cho khách hàng.</li>
                            <li>Nâng cấp website dễ dàng trong tương lai, không hạn chế khả năng mở rộng và phát triển tính năng theo nhu cầu phát triển của doanh nghiệp.</li>
                            <li>Giao diện quản lý được tùy biến dễ sử dụng và phù hợp nhất với nhu cầu của người dùng.</li>
                            <li>Giao diện quản lý được tùy biến dễ sử dụng và phù hợp nhất với nhu cầu của người dùng.</li>
                            <li>API tích hợp giữa website của bạn với vô vàng website/ứng dụng quản lý khác để việc vận hành kinh doanh trở nên thuận tiên và nhanh chóng.</li>
                        </ul>
                        <button className="btn-n2">Đăng ký ngay</button>
                    </div>
                </div>
            )
        default:
            return(
                <div className="row">
                    <div className="col-md-5">
                        <b>Lập trình di động</b>
                        <ul>
                            <li>Tuổi trẻ soft có năng lực đã được chứng mình qua các dự án cung cấp đến khách hàng về giải pháp quản trị doanh nghiệp sử dụng đa nền tảng, trong đó thiết bị di động là một phương tiện quản lý không thể thiếu.</li>
                            <li>Tối ưu User Interface và User Experience cho website của doanh nghiệp, tăng trải nghiệm của khách hàng ghé thăm website, tỷ lệ mua hàng tăng cao.</li>
                            <li>Tạo nên sự khác biệt với đối thủ kinh doanh bằng việc thể hiện sự chuyên nghiệp của thương hiệu với mobile app liên kết với website.</li>
                            <li>Người dùng ngày nay thường không có thời gian, tất cả những gì họ muốn là tốc độ và sự tiện lợi. Do đó, ứng dụng di động phải cung cấp giá trị khách hàng thực sự cần ở mọi bước để thúc đẩy và khuyến khích hành động mua của họ.</li>
                        </ul>
                        <button className="btn-n3">Xem thêm</button>
                    </div>
                    <div className="col-md-5">
                        <img className="img" src={display3} alt=""/>
                    </div>
            </div>
            )
     }
 }
export default Display;