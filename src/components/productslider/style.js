import styled from "styled-components";
import "../../assets/css/slick.min.css";
import {maxWidth, gap2, gap, colorGray, fontPoppins, colorBrown, fontLato, colorBlack} from "../../assets/css";

export const SpecialProduct = styled.div `
	margin: ${gap2} 0;
    .content {
        text-align:center;
        margin: ${gap} auto;
        width:100%auto;
        max-width:${maxWidth};
    }

    .item-product {
        display: block;
        background-image: linear-gradient(${colorGray} 33%, rgba(142, 142, 142, 0) 0%);
        background-position: right;
        background-size: 1px 30px;
        background-repeat: repeat-y;	
        padding: 0 40px;
        .imgwrp {
            display: flex;
            align-items: center;
            margin: 0 auto;		
            height: 400px;
            padding: 10px;
            img {
                margin: 0 auto;
                max-height: 370px;
            }
        }
        h5 {
            font-family: ${fontPoppins};
            font-weight: 500;
            color: ${colorBlack};
            display: block;
        }
        label {
            color: ${colorBrown};
            font-weight: bold;
            font-family: ${fontLato};
            font-size: 32px;
            display: block;
            margin: 20px 0;
        }
    }    
    .product-slider {
        padding: 0 30px;
    	margin-bottom: ${gap2};

    }
	.slick-arrow {		
		position: absolute;
		top: 30%;
        cursor: pointer;
        z-index:1;
		&:hover {
			opacity: 0.7;
		}
	}
	.slick-prev {
		right: 0;
	}
	.slick-next {
		left: 0;
	}    
`