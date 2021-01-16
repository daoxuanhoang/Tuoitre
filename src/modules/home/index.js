import React from 'react';
import { render } from '@testing-library/react';
import './styles.scss';
import Header from '../../commons/components/layouts/header/header';
import Banner from './components/banner/index';
import Container from './components/container/index';
import Services from './components/services/Services';
import Display from './components/display/Display';
import Depot from './components/depot/Depot';
import Sponsor from './components/sponsor/Sponsor';
import Solution from './components/solution/Solution';
import News from './components/news/News';
import Counselors from './components/counselors/Counselors';
import FooterTop from '../../commons/components/layouts/footer/footertop/footertop';
import FooterMidle from '../../commons/components/layouts/footer/footermidle/footermidle';
import FooterBottom from '../../commons/components/layouts/footer/footerbottom/footerbottom';


function Index(){
    return(
        <body>
      <header>
        <Header/>
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
