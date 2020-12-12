import styled from "styled-components";
import { animatecss, colorGray2, colorOrange, fontLato, gap, maxWidth } from "../../assets/css";
import doodle2 from "../../assets/images/doodle-2.svg";

export const ContainerBaker = styled.div `
	background: url(${doodle2}) top center ${colorGray2};
	background-repeat: no-repeat;
	padding: ${gap} 0;
	.content {
        width:100%;
        max-width:${maxWidth};
        margin: 0 auto;
        text-align:center;
        padding: 0 15px;
	}
`

export const ItemBaker = styled.div `
		background: #fff;
		padding: 15px 20px;
		margin: 0 10px;
        .imgwrp {
            position: relative;
            margin-bottom: -30px;
        }
        .info-people {
            background: ${colorOrange};
            color: #fff;
            border-radius: 7px;
            box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.16);
            padding: 15px 5px;
            position: relative;
        }
        ul {
            margin: 0;
            margin-top: 15px;
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            li {
                display: inline-block;
                text-align: center;
                margin: 0 3px;
                font-size: 11px;
                .icon {
                    background: rgba(0, 0, 0, 0.50);
                    width: 22px;
                    height: 22px;
                    padding: 5px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    color: #fff;
                    text-align: center;
                    animation:${animatecss};
                    img {
                        margin: 0 auto;
                    }
                    &:hover {
                        text-decoration: none;
                        background: #000;
                        animation:${animatecss};
                    }
                }
                i {
                    margin: 0 auto;
                }
            }
        }
        h4 {
            font-size: 20px;
            font-family: ${fontLato};
            font-weight: 500;
            margin: 0;
        }
        h6 {
            margin: 0;
            font-size: 15px;
            font-family:  ${fontLato};
        }
`