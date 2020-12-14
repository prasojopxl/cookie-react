import styled from "styled-components";
import { colorBlack2, colorOrange, colorPink2, colorPink3, fontPoppins, gap2, maxWidth } from "../../assets/css";

export const ContainerProfile = styled.div `
	margin-top: 90px;
	margin-bottom: 90px;
	overflow: visible;
	.content {
        margin: 0 auto;
        max-width:${maxWidth};
        width:100%;
        padding: 0 15px;
		display: flex;
	}
	.contentinfo {
		background: ${colorPink3};
		padding: 30px 50px;
		text-align: left;
		position: relative;
		top: -15px;
		z-index: 1;
		margin-left: -${gap2};
		max-width: 700px;
		font-size: 16px;
		color: ${colorBlack2};
	}
	.left {
		flex: 0.8;
		padding-left: 30px;
		.imgwrp {
			position: relative;
			&::before {
				content: "";
				position: absolute;
				width: 100%;
				height: 100%;
				border: ${colorOrange} solid 4px;
				top: -30px;
				right: -30px;
				z-index: -1;
			}
			&::after {
				content: "";
				position: absolute;
				background: ${colorPink2};
				width: 100%;
				height: 100%;
				bottom: -30px;
				left: -30px;
				z-index: -1;
			}
		}
	}
	.right {
		flex: 1.2;
		display: flex;
		align-items: center;
	}
	h3 {
		font-family: ${fontPoppins};
		font-size: 30px;
		font-weight: 500;
		color: #3D3D3D;
		position: relative;
		padding-bottom: 15px;
		margin-bottom: 20px;
		&::after {
			content: "";
			background: ${colorOrange};
			width: 40px;
			height: 4px;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}
`