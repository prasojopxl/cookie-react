import style from "styled-components";
import {fontLato, bgCover} from "./index"; 
import bgMainBaner from "../images/bgmainbaner.jpg";

export const MainBaner = style.div `
    background-image: url(${bgMainBaner});
    display: flex;
    ${bgCover}
	width: 100%;
	height: 100%;
	.content {
		margin: 110px auto 0 auto;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.left {
		text-align: left;
		.btn{ border-radius: 50px; }
	}
	.right{
		.lbounce {
			animation-name: lbounce;
			animation-timing-function: linear;
			animation-duration: 2s;
			animation-iteration-count: infinite;
		}
		@keyframes lbounce {
			0%   { transform: translateY(0); }
			50%  { transform: translateY(-20px); }
			100% { transform: translateY(0); }
		}
	}
	h4 {
		font-size: 28px;
		color: @color-brown;
		margin: 0;
	}
	h3 {
		position: relative;
		font-size: 71px;
		font-weight: 500;
		font-family: @font-Poppins;
		margin-bottom: 20px;
		z-index: 1;
		span{
			position: relative;
			&::after {
			content: "";
			position: absolute;
			width:100%;
			height: 20%;
			background-color: #F7C73F;
			border-radius: 12px;
			bottom: 10px;
			right: 0;
			z-index: -1;
			}
		}	
	}


`
