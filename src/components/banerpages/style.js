import styled from "styled-components";
import { colorPink, fontPoppins, gap } from "../../assets/css";
import imgbaner from "../../assets/images/imgbaner-pages.svg";

export const ContainerBanerPages = styled.div `
	background: url(${imgbaner}) no-repeat center ${colorPink};
	color: #fff;
	padding-top: 210px;
	padding-bottom: ${gap};
	h5 {
		text-transform: uppercase;
		font-size: 28px;
		margin: 0;
	}
	h2 {
		font-size: 70px;
		font-family: ${fontPoppins};
		font-weight: 500;
		margin: 0;
	}
`