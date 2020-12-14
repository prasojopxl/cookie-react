import styled from "styled-components";
import { bgCover, colorBlack, colorBrown, colorBrown2, fontPoppins, gap, gap2, gap3 } from "../../assets/css";
import bgspac from "../../assets/images/bgspec@2x.jpg"
import bgdeliver from "../../assets/images/bgdelivery@2x.jpg";
import bgpackage from "../../assets/images/bgpackage@2x.jpg";


export const ContainerOurProduct = styled.div `
    margin-top:${gap};
    .wrp-descproduct{
        margin-bottom: ${gap2};
    }
	.item-descproduct {
		text-align: center;
		img {
			margin-bottom: 20px;
		}
		h4 {
			font-family: ${fontPoppins};
			font-size: 24px;
			color: ${colorBrown};
			font-weight: 500;
		}
	}
    .wrp-productfeature {
        margin-bottom: ${gap};
        .wrp-half {
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: space-between;
            .box {
                width: 100%;
                height: 100%;
                color: #fff;
                background: ${colorBrown2};
                display: flex;
                align-items: center;
                height: 47%;
                &:last-child {
                    background: url(${bgspac}) no-repeat;
                    ${bgCover};
                }
                .contenttxt {
                    display: block;
                    width: 100%;
                    text-align: center;
                }			
                h4 {
                    font-size: 25px;
                    margin-bottom: ${gap3};
                }
            }
        }
        .boxfeature {
            display: flex;
            align-items: center;
            min-height: 540px;
            position: relative;
            padding-bottom: ${gap};
            &.delivery {
                background: url(${bgdeliver}) no-repeat center;
                ${bgCover};
            }
            &.package {
                background: url(${bgpackage}) no-repeat center;
                ${bgCover};
            }
            .contenttxt {
                margin: 0 auto;
                display: block;
                color: #fff;
            }	
            h6 {
                font-size: 13px;
                margin-bottom: 0;
            }
            h4 {
                font-size: 25px;
            }
            .btn {
                position: absolute;
                bottom: ${gap};
                left: 0;
                right: 0;
                display: inline-block;
                width: 70px;
                margin: 0 auto;
                border-radius: 50px;
                font-size: 16px;
                background-color: #fff;
                color:${colorBlack};
                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }

`