import React, {Component} from 'react';
import Slider from "react-slick";
import { Title } from '../../assets/css';
import {SpecialProduct} from "./style";
import products1 from "../../assets/images/product1.png";
import products2 from "../../assets/images/product2.png";
import products3 from "../../assets/images/product3.png";
import arrowRight from "../../assets/images/arrow-right.svg";
import arrowLeft from "../../assets/images/arrow-left.svg";

function RightArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <div className="slick-prev"><img src={arrowRight} alt=""/></div>
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
            <div className="slick-next"><img src={arrowLeft} alt=""/></div>
        </div>
    )
}

class ProductSlider extends Component {
    render() {
        const settings = {
            dots: false,
            arrows:true,
            infinite: true,
            prevArrow: <RightArrow/>,
            nextArrow: <LeftArrow/>,            
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <SpecialProduct>
                <div className="content">
                    <Title>
                        <h5>lorem ipsum</h5>
                        <h3>Special Cake</h3>                    
                    </Title>
                    <div className="product-slider">
                    <Slider {...settings}>
                        <div class="item-product">
                            <div class="imgwrp"><img src={products1} alt=""/></div>
                            <h5>Lorem Ipsum</h5>
                            <label>$20</label>
                            <div href="#" className="btn small green">buy</div>
                        </div>
                        <div class="item-product">
                            <div class="imgwrp"><img src={products2} alt=""/></div>
                            <h5>Lorem Ipsum</h5>
                            <label>$20</label>
                            <div href="#" className="btn small green">buy</div>
                        </div>
                        <div class="item-product">
                            <div class="imgwrp"><img src={products3} alt=""/></div>
                            <h5>Lorem Ipsum</h5>
                            <label>$20</label>
                            <div href="#" className="btn small green">buy</div>
                        </div>
                        <div class="item-product">
                            <div class="imgwrp"><img src={products2} alt=""/></div>
                            <h5>Lorem Ipsum</h5>
                            <label>$20</label>
                            <div href="#" className="btn small green">buy</div>
                        </div>
                    </Slider>  
                    </div>  
                    <div className="btn default white radius">More</div>    
                </div>          
            </SpecialProduct>
        )
    }
}

export default ProductSlider;