import React, { Component } from "react";
import {ContainerItem} from "./style";


class ItemNews extends Component {
    render() {
        return(
            <ContainerItem>
                <div className="left">
                    <img src={this.props.imgurl} alt=""/>
                </div>
                <div class="right">
                    <h5>{this.props.subTitle}</h5>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.desc}</p>
                    <div href="#" class="btn small">Read More</div>
                </div>                
            </ContainerItem>
        )
    }
}

export default ItemNews;