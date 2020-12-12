import React, { Component } from 'react';
import {ItemProduct} from "./style";

class Product extends Component {
    render() {
        return (
            <ItemProduct>
                <div class="imgwrp"><img src={this.props.productImage} alt=""/></div>
                <h5>{this.props.productName}</h5>
                <label>{this.props.price}</label>
                <div class="btn small green">buy</div>                
            </ItemProduct>
        )
    }
}

export default Product;