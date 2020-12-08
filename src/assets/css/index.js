import style from "styled-components";
import {globalFont} from "./fonts";
import {createGlobalStyle} from "styled-components";

export const colorPink     = "#ff9faf";
export const colorPink2    = "#FFF1F4";
export const colorPink3    = "#FEF9F9";
export const colorBrown    = "#A85F34";
export const colorBrown2   = "#D29681";
export const colorOrange   = "#F7C73F";
export const colorBlack    = "#3D3D3D";
export const colorBlack2   = "#777171";
export const colorGreen    = "#a3a794";
export const colorGray     = "#8E8E8E";
export const colorGray2    = "#F9F9F9";
export const colorGray3    = "#E2E2E2";
export const colorGray4    = "#FCFCFC";
export const colorGray5    = "#EFEFEF";

export const fontPoppins   = "Poppins";
export const fontLato      = "Lato";
export const fontNotera    = "Notera Personal Use Only";

export const bgCover = "background-size: cover;";
export const animatecss = "transition: all ease-out 0.4s;";

export const MainStyle = style.div `
    background:red
`

export const Content =  style.div`
    display: block; 
    margin: 0 auto; 
    text-align: center; 
    max-width: 1166px; 
    padding-left: 15px; 
    padding-right:15px;
`

export const GlobalStyle = createGlobalStyle `
    globalFont,
    body {
        color: ${colorBlack};
        font-size: 16px;
        font-family: ${fontLato}, sans-serif;
        font-weight: normal;
        line-height: 27px;
        margin: 0;
    }


`
