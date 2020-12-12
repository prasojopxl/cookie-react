import styled from "styled-components";
import { colorBlack, colorBlack2, colorOrange, colorPink, fontNotera, fontPoppins, gap, gap2 } from "../../assets/css";
import quote from "../../assets/images/quote.svg";


const gappersen= "20%";

export const ContainerTestimoni = styled.div `
    padding:${gap} 0;
.wrp-listtestimoni {

	/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,ffffff+50,fef9f9+50,fef9f9+100 */
	background: rgb(255,255,255); /* Old browsers */
	background: -moz-linear-gradient(left,  rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${gappersen}, rgba(254,249,249,1) ${gappersen}, rgba(254,249,249,1) 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(left,  rgba(255,255,255,1) 0%,rgba(255,255,255,1) ${gappersen},rgba(254,249,249,1) ${gappersen},rgba(254,249,249,1) 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,1) ${gappersen},rgba(254,249,249,1) ${gappersen},rgba(254,249,249,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#fef9f9',GradientType=1 ); /* IE6-9 */
	padding: ${gap2} 20px ${gap2} 0;
	padding-right: ${gap2};
	padding-bottom: 60px;
	.arrow-custom {
		background: ${colorOrange};
		text-align: center;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 80px;
		height: 35px;
		align-items: center;
		padding: 9px 16px;
		display: none;
		img {
			margin: 0 auto;
		}
		&.customleft {
			left: 0;
			border: ${colorOrange} solid 1px;
			background: #fff;
		}
		&.customright {
			left: 0px;
			border: ${colorOrange} solid 1px;
			margin-left: 100px;	
		}
	}
	.slick-arrow {
		background: ${colorOrange};
		position: absolute;
		left: 0;
		bottom: 20px;
		width: 80px;
		height: 35px;
		display: flex;
		align-self: center;
        text-align: center;
        z-index:1;
        cursor: pointer;
		img {
			margin: 0 auto;
		}
	}
	.slick-prev {
		border: ${colorOrange} solid 2px;
		background: none;
	}
	.slick-next {
		border: ${colorOrange} solid 2px;
		margin-left: 100px;
	}
	.item-testimoi {
		display: flex;
        padding-top: 45px;
        padding-bottom:60px;
	}
	.hr {
		text-align: left;
	}
	.left {
		flex: 1.5;
		position: relative;
		padding-bottom: 22px;		
		.imgwrp {
			position: relative;
			-webkit-box-shadow: 5px 5px 10px 6px rgba(0,0,0,0.14);
			-moz-box-shadow: 5px 5px 10px 6px rgba(0,0,0,0.14);
			box-shadow: 5px 5px 10px 6px rgba(0,0,0,0.14);			
			img {
	
			}
			&::before {
				content: "";
				background: url(${quote}) no-repeat center ${colorPink};
				width: 90px;
				height: 90px;
				border-radius: 50%;
				right: 0;
				top: 0;
				position: absolute;
				margin-top: -40px;
				margin-right: -40px;
			}
		}
	}
	.right {
		flex: 2;
		text-align: left;
		padding: 0 0 0 90px;
		color: ${colorBlack2};
		.contenttxt {
			background: #fef9f9;
			display: flex;
			flex-direction: column;
			position: relative;
			z-index: 1;
			height: 100%;
		}
		h4 {
			font-family: ${fontPoppins};
			font-weight: 500;
			font-size: 35px;
			color: ${colorBlack};
		}
		h5 {
			font-family: ${fontNotera};
			font-size: 45px;
			color: #656565;
		}
		hr {
			border: none;
			border-top: ${colorOrange} solid 2px;
			width: 100%;
			max-width: 260px;
			display: inline-block;
		}
	}
}    
`