import React, { Component } from 'react';
import { Content } from '../../assets/css';
import {ContainerOrder} from "./style";
import sugar from "../../assets/images/sugar-square-icon.svg";
import icecream from "../../assets/images/icecream-square-icon.svg";
import cake from "../../assets/images/cake-square-icon.svg";
import donut from "../../assets/images/donut-square-icon.svg";


class Order extends Component {
    render() {
        return (
            <ContainerOrder>
                <Content>
                    <div class="wrp-listorder">
                        <div class="itemorder">
                            <img src={sugar} alt=""/>
                            <h5>8832</h5>
                            <p>lorem Ipsum</p>
                        </div>
                        <div class="itemorder">
                            <img src={icecream} alt=""/>
                            <h5>334</h5>
                            <p>lorem Ipsum</p>
                        </div>
                        <div class="itemorder">
                            <img src={cake} alt=""/>
                            <h5>12</h5>
                            <p>lorem Ipsum</p>
                        </div>
                        <div class="itemorder">
                            <img src={donut} alt=""/>
                            <h5>80</h5>
                            <p>lorem Ipsum</p>
                        </div>
                    </div>                    
                </Content>
            </ContainerOrder>
        )
    }
}

export default Order;