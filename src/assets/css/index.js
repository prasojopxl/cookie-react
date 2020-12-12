import "./bootstrap.min.css";
import "./reset.css";
import "./fonts.css";

import styled from "styled-components";
// import {globalFont} from "./fonts";
import {createGlobalStyle} from "styled-components";


export const colorPink     = "#ff9faf";
export const colorPink2    = "#FFF1F4";
export const colorPink3    = "#FEF9F9";
export const colorBrown    = "#A85F34";
export const colorBrown2   = "#D29681";
export const colorOrange   = "#F7C73F";
export const colorBlack    = "#3D3D3D";
export const colorBlack2   = "#777171";
export const colorGreen    = "#a3a794";
export const colorGray     = "#8E8E8E";
export const colorGray2    = "#F9F9F9";
export const colorGray3    = "#E2E2E2";
export const colorGray4    = "#FCFCFC";
export const colorGray5    = "#EFEFEF";

export const gap           = "90px";
export const gap2          = "70px";
export const gap3          = "30px";

export const fontPoppins   = "Poppins";
export const fontLato      = "Lato";
export const fontNotera    = "Notera Personal Use Only";

export const bgCover = "background-size: cover;";
export const animatecss = "transition: all ease-out 0.4s;";

export const maxWidth = "1166px";

export const MainStyle = styled.div `
    background:red
`

export const Content =  styled.div`
    display: block; 
    margin: 0 auto; 
    text-align: center; 
    max-width: 1166px; 
    padding-left: 15px; 
    padding-right:15px;
`

export const Title = styled.div`
	display: block;
	position: relative;
	padding-bottom: 20px;
	margin-bottom: ${gap};
	h5 {
		text-transform: uppercase;
		font-size: 20px;
		font-family: ${fontLato};
		font-weight: normal;
		color: ${colorBrown};
		margin: 0;
		margin-bottom: 7px;
		display: block;
	}
	h3 {
		font-size: 42px;
		font-family: ${fontPoppins};
		font-weight: 500;
		position: relative;
		display: inline-block;
        margin: 0;
        z-index:1;
		&::after {
			content: "";
			background: ${colorPink};
			width: 35px;
			height: 35px;
			border-radius: 50%;
			position: absolute;
			left: 0;
			top: 0;
			margin-top: -5px;
            margin-left: -12px;
            z-index:-1;
		}
	}
	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 52px;
		height: 4px;
		background: ${colorOrange};
	}
`


export const GlobalStyle = createGlobalStyle `
    body {
        color: ${colorBlack};
        font-size: 16px;
        font-family: ${fontLato}, sans-serif;
        font-weight: normal;
        line-height: 27px;
        margin: 0;
    }
    #fp-nav{
        display:none;
    }    
    img {
        max-width: 100%;
    }
    a {
        color: #666;
        text-decoration: none;
        cursor:pointer;
    } 

    a:hover, a:active {
        color: inherit;
        text-decoration: underline;
    }    
    .btn {
        background: ${colorPink};
        color: #fff;
        padding: 18px;
        font-size: 18px;
        font-weight: 600;
        line-height: normal;
        border: ${colorPink} solid 1px;
        box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.09);	
        &.noradius {
            border-radius: 0 !important;
            box-shadow: none;
            padding-left: 15px;
            padding-right: 15px;
        }
        &:hover {
            background: none;
            border:${colorPink} solid 1px;
            color: ${colorPink};
        }
        &.green {
            background: ${colorGreen};
            border:${colorGreen} solid 1px;
            &:hover {
                background: none;
                border:${colorGreen} solid 1px;
                color: ${colorGreen};
            }
        }
        &.white {
            background: #fff;
            color: ${colorBlack};
            border:${colorPink} solid 2px;
            box-shadow: none;
            &:hover {
                background: ${colorPink};
                color: #fff;
            }
        }
        &.gray {
            background: ${colorGray};
            border:${colorGray} solid 1px;
            &:hover {
                color: #fff;
            }
        }
        &.small {
            padding: 8px;
            min-width: 100px;
            border-radius: 5px;
        }
        &.default {
            padding: 10px;
            min-width: 150px;
        }
        &.radius {
            border-radius: 30px;
        }

    }    
`


