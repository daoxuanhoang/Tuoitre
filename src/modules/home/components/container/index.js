import React from "react";
import "./style.scss";
import slide from '../../../../assets/images/slide1s.svg';
import Input from '../input/Input';
import Gift from '../gift/Gift';

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

export default Container;