import React, { Component } from "react";
import { Content, Title } from "../../assets/css";
import {ContainerOurProduct} from "./style";
import {BrowserRouter as Router, Link} from "react-router-dom";
import icecream from "../../assets/images/icecream-icon.svg";
import cake from "../../assets/images/cake-icon.svg";
import cake2 from "../../assets/images/cake2-icon.svg";



class OurProduct extends Component {
    render() {
        return (
            <ContainerOurProduct>
                <Router>
                    <Content>
                    <Title>
                        <h5>LOREM IPSUM</h5>
                        <h3>Our Products</h3>
                    </Title>
                    <div className="wrp-descproduct">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="item-descproduct">
                                    <img src={icecream} alt=""/>
                                    <h4>Lorem Ipsum</h4>
                                    <p>sed do eiusmod tempor incididunt ut labore etliqua.veritatis et quasi </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="item-descproduct">
                                    <img src={cake} alt=""/>
                                    <h4>Lorem Ipsum</h4>
                                    <p>sed do eiusmod tempor incididunt ut labore etliqua.veritatis et quasi </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="item-descproduct">
                                    <img src={cake2} alt=""/>
                                    <h4>Lorem Ipsum</h4>
                                    <p>sed do eiusmod tempor incididunt ut labore etliqua.veritatis et quasi </p>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className="wrp-productfeature">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="wrp-half">
                                    <div className="box">
                                        <div className="contenttxt">
                                            <h4>Our Shop</h4>
                                            <p>Lorem Ipsum 34568  (IN)<br/>
                                                +1 112 456<br/>
                                                site@lipsum.com
                                            </p>                                    
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="contenttxt">
                                            <h4>Special Offer</h4>
                                            <p>Thru  - 12 August 2020<br/>
                                                Wed  - 12 August 2020<br/>
                                                Sat  - 12 August 2020
                                            </p>                    
                                        </div>            
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div className="boxfeature delivery">
                                    <div className="contenttxt">
                                        <h6>FAST</h6>
                                        <h4>Delivery</h4>
                                        <Link to="/" className="btn small gray">Request</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="boxfeature package">
                                    <div className="contenttxt">
                                        <h6>SPECIAL</h6>
                                        <h4>Package</h4>
                                        <Link to="/" className="btn small gray">Request</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                                      
                </Content>
                </Router>
            </ContainerOurProduct>
        )
    }
}

export default OurProduct;