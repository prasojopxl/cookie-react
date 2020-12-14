import styled from "styled-components";
import { bgCover, fontLato, fontPoppins, gap } from "../../assets/css";
import bgContact from "../../assets/images/bgcontact.jpg";

export const ContainerContact = styled.div `
	background: url(${bgContact}) center;
    background:${bgCover};
	display: flex;
	align-items: center;
	color: #fff;
	padding: ${gap} 0;
	.wrapper {
		width: 100%;
		margin: 0 auto;
	}
	h4 {
		font-size: 38px;
		font-family: ${fontPoppins};
		font-weight: 500;
		margin-bottom: 15px;
	}
	p {
		margin: 0;
	}
	.left {
		text-align: left;
		font-family: ${fontLato};
		font-weight: 300;
		font-size: 28px;
	}
	.right {
		text-align: right;
		display: flex;
		align-items: center;
	}
	.content {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
`