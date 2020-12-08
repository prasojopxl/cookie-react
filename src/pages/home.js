import React, { Component } from 'react';
import {MainStyle, Content} from "../assets/css";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import { MainBaner } from '../assets/css/style';
import cookie from "../assets/images/imgbaner-home.png";


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <ReactFullpage
                    navigation
                    autoScrolling= {false}
                    fitToSection={false}
                    render={({ state, fullpageApi }) => {
                        console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console
                        return (
                            <React.Fragment>
                                <div className="section">
                                    <MainBaner>
                                        <div className="content">
                                            <div className="left">
                                                <h4>GREAT CAKE</h4>
                                                <h3>COME <span>TO EAT</span></h3>
                                                <a href="#" className="btn small">visit</a>
                                            </div>
                                            <div className="right">
                                                <img src={cookie}  alt="" className="lbounce"/>
                                            </div>
                                        </div>                                        
                                    </MainBaner>
                                </div>
                            </React.Fragment>
                        );
                    }}
                />
                <MainStyle>jhgv</MainStyle>


            </React.Fragment>
        )
    }
}

export default Home;


