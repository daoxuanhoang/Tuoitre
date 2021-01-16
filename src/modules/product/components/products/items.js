import React from 'react';

class Item extends React.Component{
    constructor(props){
        super(props);
        this.state ={};
    }
    render(){
        const {item} = this.props;
        return(
            <div>
                <div className="fbox-icon">
                <img src={item.img} alt="" />
                </div>
                <div className="fbox-desc">
                    <a>{item.name}</a>
                </div>
            </div>
        );
    }
}
export default Item;