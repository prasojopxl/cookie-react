import styled from "styled-components";
import { colorOrange, colorPink2, fontPoppins, gap, gap3, maxWidth } from "../../assets/css";

const gappadding = "27px";

export const ContainerContactForm = styled.div `
	margin-top: ${gap};
	margin-bottom: ${gap};
	.content {
        max-width:${maxWidth};
        padding:0 15px;
        margin: 0 auto;
		text-align: left;
	}
	.row {
		margin-left: -${gappadding};
		margin-right: -${gappadding};
	}
	.col-md-8 {
		flex: 0 0 63%;
		max-width: 63%;
		padding-left:  ${gappadding};
		padding-right: ${gappadding};
	}
	.col-md-4 {
		flex: 0 0 37%;
		max-width: 37%;
		padding-left:  ${gappadding};
		padding-right: ${gappadding};
    }    
    .title-single {
        margin-bottom: ${gap3};
        h4 {
            display: block;
            font-family: ${fontPoppins};
            font-weight: 500;
            font-size: 42px;
            position: relative;
            padding-bottom: 10px;
            &::after {
                content: "";
                width: 40px;
                height: 3px;
                background: ${colorOrange};
                position: absolute;
                left: 0;
                bottom: 0;
            }
        }
    }    
    .wrp-listboxaddress {
        .itembox {
            background: ${colorPink2};
            padding-left: 100px;
            position: relative;
            padding: 25px 15px;
            padding-left: 75px;
            margin-bottom: 25px;
            img {
                position: absolute;
                left: 15px;
                top: 25px;
            }
            h6 {
                margin: 0;
                font-family: ${fontPoppins};
                font-weight: 500;
            }
            p {
                margin: 0;
            }
        }
    }    
`