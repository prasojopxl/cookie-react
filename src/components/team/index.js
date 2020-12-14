import React, { Component } from "react";
import { Content, Title } from "../../assets/css";
import {ContainerTeam} from "./style";
import Item from "../../components/baker/item"
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";


class Team extends Component {
    render() {
        return (
            <ContainerTeam>
                <Content>
                    <Title>
                        <h5>lorem ipsum</h5>
                        <h3>Our Team</h3>                        
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
                </Content>
            </ContainerTeam>
        )
    }
}

export default Team;