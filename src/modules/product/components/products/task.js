import React from 'react';
import Item from './items';

class ListProducts extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
        // console.log(this.props.items);
    }
    render(){
        const items = this.props.items;
        const elmItem = items.map((item,number)=>{
            return(
                <Item key={number.toString()} item={item}/>
            );
        })
        return(
            <div className="list-product">
                <div className="product-item">
                    {elmItem}
                </div>
            </div>
        );
    };
}

export default ListProducts;