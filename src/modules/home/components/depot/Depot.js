import React from 'react';
import './style.scss';
// import depot from '../assets/images/depot.svg';

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
              {/* <img src={depot} alt=""/>   */}
            </div>
            <div className="fbox-btn">
              <button>XEM NGAY</button>
            </div>
          </div>
        </div>
      );
    }
}

export default Depot;