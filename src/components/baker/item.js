import React, { Component } from "react";
import {ItemBaker} from "./style";
import iconfb from "../../assets/images/icon_fb.svg";
import icontw from "../../assets/images/icon_tw.svg";
import iconin from "../../assets/images/icon_in.svg";
import iconpint from "../../assets/images/icon_pint.svg";

class Item extends Component {
    render() {
        return(
            <ItemBaker>
                <div class="imgwrp">
                    <img src={this.props.imgurl} alt=""/>                    
                </div>                
                <div class="info-people">
                    <h4>{this.props.name}</h4>
                    <h6>{this.props.title}</h6>
                    <ul>
                        <li><div className="icon"><img src={iconfb} alt=""/></div></li>
                        <li><div className="icon"><img src={icontw} alt=""/></div></li>
                        <li><div className="icon"><img src={iconin} alt=""/></div></li>
                        <li><div className="icon"><img src={iconpint} alt=""/></div></li>
                    </ul>
                </div>                            
            </ItemBaker>
        )
    }
}

export default Item;