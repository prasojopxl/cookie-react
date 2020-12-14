import styled from "styled-components";
import { colorBlack2, colorPink } from "../../assets/css";
import arrowLeft from "../../assets/images/arrow-paging-left.svg";
import arrowRight from "../../assets/images/arrow-paging-right.svg";


export const ContainerPaging = styled.div `
    padding-bottom: 90px;
    margin: 0 auto;
    text-align:center;
	ul {
		li {
			display: inline-block;			
			margin: 0 7px;
			vertical-align: middle;
			a {
				display: block;
				border: ${colorPink} solid 2px;
				color: ${colorBlack2};
				padding: 4px 12px;
			}
			&:hover, &.active {
				a {
					background: ${colorPink};
					color: #fff;
				}					
			}
			&:first-child {
				background: url(${arrowLeft}) no-repeat #fff center;
				vertical-align: middle;
				text-indent: -999999999pc;
				a {
					width: 35px;
				}
					&:hover, &.active {
						a {
							background: url(${arrowLeft}) no-repeat ${colorPink} center;
							color: #fff;
						}					
					}
				}
			&:last-child {
				background: url(${arrowRight}) no-repeat center;
				vertical-align: middle;
				text-indent: -999999999pc;
				a {
					width: 35px;
				}
				&:hover, &.active {
					a {
						background: url(${arrowRight}) no-repeat ${colorPink} center;
						color: #fff;
					}					
				}
		}
	
		}
	}
`