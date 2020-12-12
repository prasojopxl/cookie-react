import React, { Component } from 'react';
import { Content, Title } from '../../assets/css';
import {ContainerProductList} from "./style";
import Product from "../product/";
import product2 from "../../assets/images/product2.png";

class ProductList extends Component {
    render() {
        return (
            <ContainerProductList>
                <Content>
                    <Title>
                        <h5>lorem ipsum</h5>
                        <h3>Best Cakes</h3>                        
                    </Title>
                    <div className="wrp-list-itemproducts">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <Product productImage={product2} productName="Lorem Ipsum" price="$10"/>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <Product productImage={product2} productName="Lorem Ipsum" price="$10"/>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <Product productImage={product2} productName="Lorem Ipsum" price="$10"/>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <Product productImage={product2} productName="Lorem Ipsum" price="$10"/>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <Product productImage={product2} productName="Lorem Ipsum" price="$10"/>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <Product productImage={product2} productName="Lorem Ipsum" price="$10"/>
                            </div>
                        </div>
                        <div class="btn default white radius">More</div>
                    </div>
                </Content>
            </ContainerProductList>
        )
    }
}

export default ProductList;