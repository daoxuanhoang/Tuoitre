import React from 'react';
import './styles.scss';
import ServicesWebsite from '../product/components/servicesWebsite/servicesWebsite'
import Display from '../product/components/displays/displays';
import Product from './components/products/product';
import Header from '../../commons/components/layouts/header/header';
import Method from '../product/components/method/method';
import Depots from '../product/components/depots/depots';
import Banner from '../product/components/banner/banner';
import Input from '../product/components/input/input';
import FooterTop from '../../commons/components/layouts/footer/footertop/footertop';
import FooterMidle from '../../commons/components/layouts/footer/footermidle/footermidle';
import FooterBottom from '../../commons/components/layouts/footer/footerbottom/footerbottom';


function Contact(){
 return(
     <>
         <header>
            <Header/>
         </header>
         <main>
             <ServicesWebsite title="Tuổi trẻ Soft thiết kế website chuyên nghiệp nhất dành riêng cho Quý khách hàng"/>
             <Display/>
            <Product title="Kho giao diện website hiện đại và chuyên nghiệp" content="Thế mạnh Tuổi trẻ Soft là lập trình website Framework, chúng em tự tin thiết kế ra sản phẩm giao diện theo đúng yêu cầu từ anh chị."/>
            <Method/>
            <Depots/>
            <Banner/>
            <Input/>
         </main>
         <footer>
            <FooterTop title={["Cung cấp giải pháp quản trị doanh nghiệp","Cung cấp giải pháp quản lý bán hàn POS","Lập trình ứng dụng di động Android, IOS","Cung cấp giải pháp Website ứng dụng","Dịch vụ lưu trữ đám mây cho doanh nghiệp"]}
            items={["Văn bản pháp lý","Giải quyết khiếu nại","Xử lý tranh chấp tên miền","Quy định sử dụng dịch vụ","Quy định sử dụng tên miền Việt Nam","Điều khoản bảo mật"]}/> 
            <FooterMidle title="TRỤ SỞ CHÍNH:" content={["316 Lê Văn Sỹ","Phường 1, Quận Tân Bình, TP. Hồ Chí Minh","MST: 0314623823"]} title2="VĂN PHÒNG - TRUNG TÂM PHÁT TRIỂN PHẦN MỀM HỒ CHÍ MINH:"
            content2={["316 Lê Văn Sỹ","Phường 1, Quận Tân Bình, TP. Hồ Chí Minh","MST: 0314623823"]}/>
            <FooterBottom  title={["Copyrights © 2017 All Rights Reserved by TuoiTreSoft.Com.","Terms of Use / Privacy Policy"]}/>
         </footer>
     </>
 );
}

export default Contact;