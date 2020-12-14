import styled from "styled-components";
import { animatecss, colorBlack, colorBlack2, colorGray2, fontPoppins, gap } from "../../assets/css";

export const ContainerNews = styled.div `
	background: ${colorGray2};
	padding: ${gap} 0;
`

export const ContainerItem = styled.div `
		background: #fff;
		text-align: left;
		display: flex;
        margin: 15px 0;
        .btn {
            border-radius: 0;
            box-shadow: none;
            padding-left: 15px;
            padding-right: 15px;
            position: absolute;
            bottom: 15px;
            font-weight: 400;
        }
        .left, .right {
            flex: 1;
        }
        .left {
            flex: 1.2;
            position: relative;
            overflow: hidden;
            &::before {
                content: "";
                position: absolute;
                left: -100%;
                top: 0;
                display: table-cell;
                vertical-align: middle;
                width: 100%;
                height: 100%;
                background:  rgba(255, 0, 0, 0.1);
                animation:${animatecss}
            }
            &::after {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                display: table-cell;
                vertical-align: middle;
                text-align: center;
                width: 100%;
                height: 100%;
                background: url("../images/external-link-symbol.svg") no-repeat center;
                opacity: 0;
                animation:${animatecss};
            }			
            &:hover {
                &::before {
                    content: "";
                    animation:${animatecss};
                    left: 0;
                }
                &::after {
                    content: "";
                    animation:${animatecss};
                    opacity: 1;
                }
            }
        }
        .right {
            padding: 20px;
            padding-bottom: 60px;
            color: ${colorBlack2};
            display: flex;
            flex-direction: column;
            position: relative;
            h5 {
                font-weight: 300;
                font-size: 16px;
                text-transform: uppercase;
            }
            h4 {
                font-family: ${fontPoppins};
                font-weight: 500;		
                font-size: 21px;
                color: ${colorBlack};
            }
        }                
`