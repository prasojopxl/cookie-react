import styled from "styled-components";
import { gap, gap2 } from "../../assets/css";

export const ContainerProductList = styled.div `
	margin-bottom: ${gap} - 40;
    padding: ${gap2} 0;    
    .wrp-list-itemproducts {
	margin-bottom: 0;
	.col-lg-4 {
        margin-bottom: 90px;
		.item-product {
		}
		&:nth-child(3n+0) {
			.item-product {
				background-image: none;
			}	
		}
	}
}    
`