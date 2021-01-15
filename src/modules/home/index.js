import React from 'react';
import { render } from '@testing-library/react';
import logo from '../../assets/images/logo.svg';
import logoimg from '../../assets/images/logotuoitre.svg';
import './styles.scss';
import Banner from './components/banner/index';
import Container from './components/container/index';
import Button from '../../commons/components/buttonCustom/Button';
import Dropdown from './components/dropdownmenu/Dropdown';
import Services from './components/services/Services';
import Display from './components/display/Display';
import Depot from './components/depot/Depot';
import Sponsor from './components/sponsor/Sponsor';
import Solution from './components/solution/Solution';
import News from './components/news/News';
import Counselors from './components/counselors/Counselors';
import FooterTop from './components/footertop/FooterTop';
import FooterMidle from './components/footermidle/FooterMidle';
import FooterBottom from './components/footerbottom/FooterBottom';


function Index(){
    return(
        <body>
      <header>
     <div className="header-wrap">
     <div className="logo">
        <a href="#" className="standard-logo active">
          <img src={logoimg} alt=""/>
          </a>
      </div>
      <div className="primary-menu-trigger">
       <Dropdown titleMain="Website theo yêu cầu" items={["Lưu trữ đám mây","Kho ứng dụng","Khuyến mãi"]}/>
       <Button name="Kho giao diện"/>
       <Dropdown className="dropdown-two" titleMain="Bảng giá" items={["Bảng giá website","Bảng giá dịch vụ nâng cấp & quản trị website","Bảng giá dịch vụ phát triển thương hiệu"]}/>
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
        <FooterBottom  title={["Copyrights © 2017 All Rights Reserved by TuoiTreSoft.Com.","Terms of Use / Privacy Policy"]}/>
      </footer>
    </body>
    );
}

export default Index;
