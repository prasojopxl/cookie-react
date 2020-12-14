import styled from "styled-components";
import { colorBlack2, colorGray, gap, gap2, maxWidth } from "../../assets/css";

export const ContainerFilter = styled.div `
	margin-top: ${gap};
	margin-bottom: ${gap2};
	.content {
        margin: 0 auto;
        max-width: ${maxWidth};
        padding: 0 15px;
		display: flex;
		width: 100%;
		justify-content: space-evenly;
		align-items: center;
	}
	.left {
		flex: 1;
		text-align: left;
	}
	.right {
		flex: 1;
		text-align: right;		
	}
	.wrp-search {
		display: inline-block;
		input[type="search"], input[type="text"] {
			border: none;
			border-bottom: ${colorGray} solid 1px;
		}
    }
    .select_custom {
        width: 200px;
        display: inline-block;
        height: 24px;
        position: relative;
        vertical-align: middle;
        background: #fff;
        border-bottom: ${colorGray} solid 1px;
    }	
    .select_custom	select {
        border: none;
        z-index: 2;
        padding: 0 10px;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        top: 0;
        background-color: transparent;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        color:#999;
    }
    .select_custom .select_icon {
        position: absolute;
        right: 0;
        top: 7px;
        width: 20px;
        height: auto;
        color:${colorBlack2};
    }
    .select_icon img {
        margin-top: 2px;
        width: 80%;
        height: 80%;
    }    
`