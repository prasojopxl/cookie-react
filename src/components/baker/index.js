import React, { Component } from "react";
import { Title } from "../../assets/css";
import {ContainerBaker} from "./style";
import Item from "./item";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";


class Baker extends Component {
    render() {
        return (
            <ContainerBaker>
                <div className="content">
                    <Title>
                        <h5>lorem ipsum</h5>
                        <h3>Our Bakers</h3>
                    </Title>
                    <div className="wrp-listbakers">
                        <div className="row">
                            <div class="col-lg-4 col-sm-12">
                                <Item imgurl={people1} name="John Doe" title="Pro Baker"/>
                            </div>
                            <div class="col-lg-4 col-sm-12">
                                <Item imgurl={people2} name="John Doe" title="Pro Baker"/>
                            </div>
                            <div class="col-lg-4 col-sm-12">
                                <Item imgurl={people3} name="John Doe" title="Pro Baker"/>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerBaker>
        )
    }
}

export default Baker;