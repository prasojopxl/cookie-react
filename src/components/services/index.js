import React, { Component } from 'react';
import { Title } from '../../assets/css';
import {ContainerServices} from "./style";
import cupicon from "../../assets/images/cup-icon.svg";
import cakeicon from "../../assets/images/cake-icon.svg";
import cake2icon from "../../assets/images/cake2-icon.svg";
import icecreamicon from "../../assets/images/icecream-icon.svg";
import sugaricon from "../../assets/images/sugar-icon.svg";
import chocoicon from "../../assets/images/choco-icon.svg";

class Services extends Component {
    render() {
        return(
            <ContainerServices>
                <div className="content">
                    <Title>
                        <h5>lorem ipsum</h5>
                        <h3>Our Services</h3>                        
                    </Title>
                    <div className="wrp-itemservices">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="item-services">
                                    <div className="imgwrp"><img src={cupicon} alt=""/></div>
                                    <h4>Lorem Ipsum</h4>
                                    <p>sed do eiusmod tempor incididunt ut labore etliqua.veritatis et quasi</p>
                                </div>                                        
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="item-services">
                                    <div className="imgwrp"><img src={cakeicon} alt=""/></div>
                                    <h4>Lorem Ipsum</h4>
                                    <p>sed do eiusmod tempor incididunt ut labore etliqua.veritatis et quasi</p>
                                </div>                                        
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="item-services">
                                    <div className="imgwrp"><img src={cake2icon} alt=""/></div>
                                    <h4>Lorem Ipsum</h4>
                                    <p>sed do eiusmod tempor incididunt ut labore etliqua.veritatis et quasi</p>
                                </div>                                        
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="item-services">
                                    <div className="imgwrp"><img src={icecreamicon} alt=""/></div>
                                    <h4>Lorem Ipsum</h4>
                                    <p>sed do eiusmod tempor incididunt ut labore etliqua.veritatis et quasi</p>
                                </div>                                        
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="item-services">
                                    <div className="imgwrp"><img src={sugaricon} alt=""/></div>
                                    <h4>Lorem Ipsum</h4>
                                    <p>sed do eiusmod tempor incididunt ut labore etliqua.veritatis et quasi</p>
                                </div>                                        
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="item-services">
                                    <div className="imgwrp"><img src={chocoicon} alt=""/></div>
                                    <h4>Lorem Ipsum</h4>
                                    <p>sed do eiusmod tempor incididunt ut labore etliqua.veritatis et quasi</p>
                                </div>                                        
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerServices>
        )
    }
}

export default Services;