import React from 'react';
import { Switch } from 'react-router-dom';
import './style.scss';

class Method extends React.Component{
    render(){
        return(
            <div className="method">
                <div className="method-title">
                    <span>Quy trình triển khai dự án</span>
                </div>
                <div className="row">
                    <SwitchMethod value="1"/>
                    <SwitchMethod value="2"/>
                    <SwitchMethod value="3"/>
                    <SwitchMethod value="default"/>
                </div>
            </div>
        );
    }
}
 function SwitchMethod(props) {
    switch(props.value){
        case "1":
            return(
                <div className="method-item-n1" style={{borderColor:"#f3a8ad"}}>
                    <div className="fbox-item-n1" style={{borderColor:"#f3a8ad"}}>
                        <div className="content">
                            <h1 style={{color:"#f3a8ad"}}>Bước 01</h1>
                            <span>Tiếp nhận và phân tích yêu cầu của Quý khách hàng. Tư vấn để xây dựng dựng án hoàn chỉnh nhất.</span>
                        </div>
                    </div>
                </div>
            )
        case "2":
            return(
                <div className="method-item-n2" style={{borderColor:"#ffac06"}}>
                    <div className="fbox-item-n2" style={{borderColor:"#ffac06"}}>
                        <div className="content">
                            <h1 style={{color:"#ffac06"}}>Bước 02</h1>
                            <span>Thiết kế giao diện hoàn chỉnh theo ý tưởng khách hàng cho đến khi duyệt bản thiết kế. Tiến hành lập trình toàn bộ website.</span>
                        </div>
                    </div>
                </div>
            )
        case "3":
            return(
                <div className="method-item-n1" style={{borderColor:"#a1373f"}}>
                    <div className="fbox-item-n1" style={{borderColor:"#a1373f"}}>
                        <div className="content">
                            <h1 style={{color:"#a1373f"}}>Bước 03</h1>
                            <span>Sau khi các lập trình viên đã hoàn thành dự án, trưởng phòng kỹ thuật thực hiện test sản phẩm và gửi đến khách hàng test qua tính năng, các công cụ quản trị.</span>
                        </div>
                    </div>
                </div>
            )
        default:
            return(
                <div className="method-item-n2" style={{borderColor:"#f47f1f"}}>
                    <div className="fbox-item-n2" style={{borderColor:"#f47f1f"}}>
                        <div className="content">
                            <h1 style={{color:"#f47f1f"}}>Bước 04</h1>
                            <span>Bàn giao sản phẩm dự án đến cho khách hàng và hướng dẫn sử dụng, quản trị website. Chuyển dự án sang bộ phận chăm sóc khách hàng tiếp tục hỗ trợ khách hàng trong suốt quá trình vận hành.</span>
                        </div>
                    </div>
                </div>
            )
    }
 }
export default Method;