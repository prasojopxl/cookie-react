import styled from "styled-components";
import { colorBrown, colorGray2, fontPoppins, gap2, gap3, maxWidth } from "../../assets/css";
import doodle2 from "../../assets/images/doodle-1.svg";


export const ContainerServices = styled.div `
    background: url(${doodle2}) bottom center ${colorGray2};    
	background-repeat: no-repeat;
	min-height: 500px;
	padding: ${gap2} 0;
    padding-bottom: 0;
    .content {
        width:100%;
        max-width:${maxWidth};
        margin:0 auto;
        padding:0 15px;
        text-align:center;
    }
    .wrp-itemservices{ padding-bottom: 60px; }
	.item-services {
		display: block;
		margin-bottom: ${gap3};
		min-height: 230px;
		h4 {
			font-family: ${fontPoppins};
			font-weight: 500;
			color: ${colorBrown};
			font-size: 24px;
			margin-top: 20px;
			margin-bottom: 7px;
		}
	}

`