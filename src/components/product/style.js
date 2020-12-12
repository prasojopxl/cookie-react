import styled from "styled-components";
import { colorBlack, colorGray, fontLato, fontPoppins } from "../../assets/css";

export const ItemProduct = styled.div`
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
		color: $colorBrown;
		font-weight: bold;
		font-family: ${fontLato};
		font-size: 32px;
		display: block;
		margin: 20px 0;
	}
`