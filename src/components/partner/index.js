import React, { Component } from "react"
import { Content, Title } from "../../assets/css";
import {ConntainerPartner, ContainerListBrand} from "./style";
import brand1 from "../../assets/images/brand1.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
import brand4 from "../../assets/images/brand4.png";
import brand5 from "../../assets/images/brand5.png";
import { Link } from "react-router-dom";


class ItemBrand extends Component {
    render() {
        return (
            <React.Fragment>
                <Link><img src={this.props.imgurl} alt=""/></Link>
            </React.Fragment>
        )
    }
}


class Partner extends Component {
    render() {
        return (
            <ConntainerPartner>
                <Content>
                    <Title>
                        <h5>lorem ipsum</h5>
                        <h3>Our Partners</h3>
                    </Title>
                    <ContainerListBrand>
                        <ItemBrand imgurl={brand1}/>
                        <ItemBrand imgurl={brand2}/>
                        <ItemBrand imgurl={brand3}/>
                        <ItemBrand imgurl={brand4}/>
                        <ItemBrand imgurl={brand5}/>
                    </ContainerListBrand>
                </Content>
            </ConntainerPartner>
        )
    }
}

export default Partner;