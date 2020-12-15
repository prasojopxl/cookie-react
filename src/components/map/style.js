import styled from "styled-components";

export const ContainerMap = styled.div `
    iframe {
        border: none;
    }

    .google-maps {
        position: relative;
        padding-bottom: 30%; 
        height: 0;
        overflow: hidden;
    }
    .google-maps iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100% !important;
        height: 100% !important;
    }
    
`