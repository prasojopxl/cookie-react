import styled from "styled-components";
import {colorBlack2, fontPoppins, colorPink, colorPink2} from "../../assets/css";

export const ContainerHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    margin-top: 40px;
    .mainmenu {
        background: #fff;
        display: flex;
        justify-content:space-between;
        padding: 18px 12px;
        font-size: 18px;
        font-family: ${fontPoppins};
        font-weight: 500;
        box-shadow: 5px 5px 9px rgba(0, 0, 0, 0.13);	
        a {
            color: ${colorBlack2};
            padding: 0 27px;
            &:hover {
                text-decoration: none;
            }
        }	        
        ul {
            margin-bottom: 7px;
            display: flex;
            align-items: center;
            li {
                position: relative;
                margin: 10px 0;
                &::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    top: 0;
                    background: ${colorPink}; 
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    margin-top: -10px;
                    opacity: 0;
                }
                &:hover,&.active {
                    &::before {
                        opacity: 1;
                    }
                }
            }
        }
        .submenu {
            position: relative;
            &:hover {
                ul {
                    display: block;
                }
            }
            ul {
                position: absolute;
                display: block;			
                width: 200px;
                background: ${colorPink2};
                margin-left: -15px;
                padding: 10px 0;
                box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.09);	
                display: none;			
                li {
                    display: block;
                    position: relative;
                    &::before {
                        right: auto;
                        top: 20px;
                        margin-left: 20px;
                    }
                    &:hover,&.active {
                        &::before {
                            opacity: 1;
                        }
                    }	
                }
            }
        }        
    }    
`

export const LeftHeader = styled.div`
    a {
        display:flex;
        align-items:center;
        font-size:20px;
        color:${colorBlack2};
        text-decoration:none;
        padding: 0 27px;
    }
    img {
        width: 59px;
        margin-right:5px;
    }
`

export const RightHeader = styled.div`
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
                text-decoration:none;
                font-weight:500;
            }
        }
    }
`



