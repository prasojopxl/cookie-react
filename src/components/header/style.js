import style from "styled-components";
import {colorBlack, fontPoppins} from "../../assets/css";



export const ContainerHeader = style.div`
    display:flex;
    justify-content:space-between;
    margin: 0 auto; 
    text-align: center; 
    max-width: 1166px; 
	padding: 18px 12px;
	font-size: 18px;
	font-family: ${fontPoppins};
    font-weight: 500;
    background:#fff;
    box-shadow: 5px 5px 9px rgba(0, 0, 0, 0.13);	
    position:absolute;
    left:0;
    right:0;
    z-index:1;
    margin-top:40px;
`


export const Left = style.div`
    a {
        display:flex;
        align-items:center;
        font-size:20px;
        color:${colorBlack};
        text-decoration:none;
        padding: 0 27px;
    }
    img {
        width: 59px;
    }
`

export const Right = style.div `
    display:flex;
    align-items:center;
    padding: 0 30px;
    justify-content:space-between;
    font-family: ${fontPoppins};
    ul {
        margin:0;
        padding:0;
        display:flex;
        li {
            list-style:none;
            a {
                padding: 10px 20px;
                color:#999;
                font-size:21px;
                text-decoration:none;
            }
        }
    }
`

