import style from "styled-components";

export const ContainerHeader = style.div`
    display:flex;
    justify-content:space-between;
    max-width:1000px;
    margin: 0 auto;
`

export const Left = style.div`
    background:#FFDEAD;
    padding:10px;
    min-width:100px;
    a {
        display:block;
    }
`

export const Right = style.div `
    background:#FFE4E1;
    color:white;
    display:flex;
    align-items:center;
    padding: 0 30px;
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

