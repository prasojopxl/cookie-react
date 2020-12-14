import React, { Component } from "react";
import {ContainerNews} from "./style.js";
import {Title, Content} from "../../assets/css";
import ItemNews from "./itemnews";
import imgnews1 from "../../assets/images/imgnews1.jpg";
import imgnews2 from "../../assets/images/imgnews2.jpg";
import imgnews3 from "../../assets/images/imgnews3.jpg";
import imgnews4 from "../../assets/images/imgnews4.jpg";


class News extends Component {
    render() {
        return (
            <ContainerNews>
                <Content>
                    <Title>
                        <h5>lorem ipsum</h5>
                        <h3>Our News</h3>                        
                    </Title>
                    <div className="wrp-listnews">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <ItemNews imgurl={imgnews1} subTitle="sweet" title="Lorem Ipsum" desc="incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru"/>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <ItemNews imgurl={imgnews2} subTitle="sweet" title="Lorem Ipsum" desc="incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru"/>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <ItemNews imgurl={imgnews3} subTitle="sweet" title="Lorem Ipsum" desc="incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru"/>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <ItemNews imgurl={imgnews4} subTitle="sweet" title="Lorem Ipsum" desc="incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru"/>
                            </div>
                        </div>
                    </div>
                </Content>
            </ContainerNews>
        )
    }
}

export default News;