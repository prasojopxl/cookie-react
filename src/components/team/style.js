import styled from "styled-components";
import { colorPink, gap3 } from "../../assets/css";

export const ContainerTeam = styled.div `
	margin-top: 90px;
	position: relative;
	padding-bottom: ${gap3};
	&::before {
		content: "";
		background: ${colorPink};
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 200px;
	}
	.wrp-listbakers {
		.item-bakers {
			background: none;
		}
	}
`

