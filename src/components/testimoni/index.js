import React, { Component } from "react";
import Slider from "react-slick";
import { Content, Title } from "../../assets/css/index.js";
import {ContainerTestimoni} from "./style.js";
import john from "../../assets/images/john.jpg";
import arrowLeft from "../../assets/images/arrowtestimoni-left.svg";
import arrowRight from "../../assets/images/arrowtestimoni-right.svg";

function RightArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <div className="slick-next"><img src={arrowRight} alt=""/></div>
        </div>
    )
}

function LeftArrow(props) {
    const { className, style, onClick } = props;

    return (
        <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
        >
            <div className="slick-prev"><img src={arrowLeft} alt=""/></div>
        </div>
    )
}


class Testimoni extends Component {
    render() {
        const settings = {
            dots: false,
            arrows:true,
            infinite: true,
            prevArrow: <LeftArrow/>,
            nextArrow: <RightArrow/>,                        
            slidesToShow: 1,
            slidesToScroll: 1
        };        
        return(
            <ContainerTestimoni>
                <Content>
                    <Title>
                        <h5>LOREM IPSUM</h5>
                        <h3>Testimonial</h3>
                    </Title>
                    <div className="wrp-listtestimoni">
                        <Slider {...settings}>
                            <React.Fragment>
                                <div class="item-testimoi">
                                    <div class="left">
                                        <div class="imgwrp">
                                            <img src={john} alt=""/>
                                        </div>
                                        <div class="customleft arrow-custom"><img src={arrowLeft} alt=""/></div>
                                        <div class="customright arrow-custom"><img src={arrowRight} alt=""/></div>
                                    </div>
                                    <div class="right">
                                        <div class="contenttxt">
                                            <h4>Lorem Ipsum</h4>
                                            <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>                        
                                            <div class="hr"><hr/></div>
                                            <h5>john doe</h5>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                            <React.Fragment>
                                <div class="item-testimoi">
                                    <div class="left">
                                        <div class="imgwrp">
                                            <img src={john} alt=""/>
                                        </div>
                                        <div class="customleft arrow-custom"><img src={arrowLeft} alt=""/></div>
                                        <div class="customright arrow-custom"><img src={arrowRight} alt=""/></div>
                                    </div>
                                    <div class="right">
                                        <div class="contenttxt">
                                            <h4>Lorem Ipsum</h4>
                                            <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>                        
                                            <div class="hr"><hr/></div>
                                            <h5>john doe</h5>
                                        </div>
                                    </div>
                                </div>           
                            </React.Fragment>                 
                        </Slider>
                    </div>
                </Content>
            </ContainerTestimoni>
        )
    }
}

export default Testimoni