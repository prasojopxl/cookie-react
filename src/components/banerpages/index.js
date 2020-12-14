import React, { Component } from "react";
import { Content } from "../../assets/css";
import {ContainerBanerPages} from "./style";

class BanerPages extends Component {
    render() {
        return (
            <ContainerBanerPages>
                <Content>
                    <h5>{this.props.subtitle}</h5>
                    <h2>{this.props.title}</h2>
                </Content>
            </ContainerBanerPages>
        )
    }
}

export default BanerPages;