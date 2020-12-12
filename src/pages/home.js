import React, { Component } from 'react';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import { MainBaner } from '../assets/css/style';
import ProductSlider from "../components/productslider";
import Services from "../components/services";
import Order from "../components/order";
import ProductList from "../components/productlist";
import Baker from "../components/baker";
import Testimoni from "../components/testimoni"

import cookie from "../assets/images/imgbaner-home.png";


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <ReactFullpage
                    navigation
                    licenseKey = {'YOUR_KEY_HERE'}
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
                                                <div className="btn small">visit</div>
                                            </div>
                                            <div className="right">
                                                <img src={cookie}  alt="" className="lbounce"/>
                                            </div>
                                        </div>                                        
                                    </MainBaner>
                                </div>

                                <ProductSlider/>
                                <Services/>
                                <Order/>
                                <ProductList/>
                                <Baker/>
                                <Testimoni/>
                                

                            </React.Fragment>
                        );
                    }}
                />


            </React.Fragment>
        )
    }
}

export default Home;


