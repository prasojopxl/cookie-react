import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Content } from "../../assets/css";
import {ContainerContact} from "./style";

class Contact extends Component {
    render() {
        return (
            <ContainerContact>
                <Content>
                    <div class="content">
                        <div class="left">
                            <h4>Contact Us Now</h4>
                            <p>+ 12 123 456 789</p>
                        </div>
                        <div class="right">
                            <Link className="btn default">Get A Quote</Link>
                        </div>
                    </div>                    
                </Content>
            </ContainerContact>
        )
    }
}

export default Contact;