import styled from "styled-components";
import { bgCover, colorGray3, fontLato, fontPoppins } from "../../assets/css";
import bgfooter from "../../assets/images/bgfooter.jpg";


export const ContainerFooter = styled.div `
    background: url(${bgfooter}) center;
    ${bgCover};
	.mainlogo {
		font-size: 22px;
		font-family: ${fontPoppins};
		font-weight: 500;
		margin-bottom: 20px;
		display: block;
	}
	.flex-center {
		display:flex;
		align-items:center;
		margin-bottom:0px;
	}
	.logo {
		width: 43px;
		margin-right:5px;
	}
	.content {
		font-family: ${fontLato};
		font-weight: 300;
		text-align: left;
		padding-top: 50px;
		padding-bottom: 30px;
		color: ${colorGray3};
	}
	h4 {
		margin-bottom: 10px;
	}
	p {
		font-size: 16px;
		max-width: 410px;
	}
	hr {
		border: none;
		border-top: ${colorGray3} solid 1px;
		margin-top: 5px;
		margin-bottom: 20px;
	}
	ul {
		&.socmed {
			margin-top: 25px;
			li {
				display: inline-block;
				a {
					font-size: 20px;
					display: block;
					padding: 5px 10px;
					&::before {
						content: none;
					}
				}
			}
		}
		li {
			a {
				color: ${colorGray3};
				font-size: 16px;
				padding: 4px 0;
				display: block;
				&::before {
					content: ">";
					margin-right: 5px;
					display: inline-block;
				}
			}
		}
	}
	a {
		color: #fff;
	}
`

export const CopyRight = styled.div `
	color: #fff;
	font-size: 18px;
	font-weight: normal;
`