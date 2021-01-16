import React from 'react';
import './style.scss';
import logoimg from '../../../../assets/images/logotuoitre.svg';
import Button from '../../../../commons/components/buttonCustom/Button';
import Dropdown from '../../../../modules/home/components/dropdownmenu/Dropdown';

class Header extends React.Component{
    render(){
        return(
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
            <button className="account bi bi-person"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            </svg>Đăng nhập</button>
            </div>
        </div>
        );
    };
}

export default Header;