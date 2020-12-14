import React, { Component } from "react";
import {ContainerProductList} from "./style";
import Product from "../../components/product"
import product2 from "../../assets/images/product2.png";
import { Content } from "../../assets/css";

class ProductPage extends Component {
    render() {
        return(
            <ContainerProductList>
                <Content>
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
                    </div>    
                </Content>        
            </ContainerProductList>
        )
    }
}

export default ProductPage;