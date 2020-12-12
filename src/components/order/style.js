import styled from "styled-components";
import { colorOrange, fontLato, fontPoppins } from "../../assets/css";
import bgorder from "../../assets/images/bgorder.jpg";


export const ContainerOrder = styled.div `
	background: url(${bgorder});
	padding: 50px 0;
	font-family: ${fontLato};
	font-size: 20px;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;	
    width: 100%;
	.wrp-listorder {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	h5 {
		font-family: ${fontPoppins};
		font-size: 30px;
		color: ${colorOrange};
		margin-top: 17px;
		margin-bottom: 5px;
	}
	p {
		margin: 0;
	}
	.itemorder {
		color: #fff;
	}    
`