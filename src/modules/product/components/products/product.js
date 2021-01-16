import React from 'react';
import './style.scss';
import tasks from '../mocks/tasks';
import ListProducts from '../products/task';

class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           items: tasks
        };
    }
    render(){
        let items = this.state.items;
        return(
            <div className="product-main">
                <div className="header-wrap">
                    <span className="title">{this.props.title}</span>
                    <span className="content">{this.props.content}</span>
                </div>
                <ListProducts items={items}/>

                <div className="fbox-btn">
                    <button>Xem thêm nhiều mẫu</button>
                </div>
            </div>
        );
    };
}

export default Product;
