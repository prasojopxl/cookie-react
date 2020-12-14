import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import { Content } from '../../assets/css';
import {ContainerFooter} from "./style";
import logo from "../../assets/images/logo.svg";
import iconfb from "../../assets/images/icon_fb.svg";
import icontw from "../../assets/images/icon_tw.svg";
import iconin from "../../assets/images/icon_in.svg";
import iconpint from "../../assets/images/icon_pint.svg";

class Footer extends Component {
    render() {
        return (
            <ContainerFooter>
                    <Router>
                    <Content>
                        <div className="content">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Link to="/" className="flex-center">
                                        <img src={logo} className="logo" alt=""/>
                                        LOREM IPSUM
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam et nibh condimentum venenatis eu ac magnasin. Quisque </p>
                                    <ul className="socmed">
                                        <li><Link to="/"><img src={iconfb} alt=""/></Link></li>
                                        <li><Link to="/"><img src={icontw} alt=""/></Link></li>
                                        <li><Link to="/"><img src={iconin} alt=""/></Link></li>
                                        <li><Link to="/"><img src={iconpint} alt=""/></Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-sm-4">
                                    <h4>About</h4>
                                    <ul>
                                        <li><Link to="/">About Us</Link></li>
                                        <li><Link to="/">Services</Link></li>
                                        <li><Link to="/">Testimonials</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-sm-4">
                                    <h4>Contact</h4>
                                    <ul>
                                        <li><Link to="/">Booking</Link></li>
                                        <li><Link to="/">Contact</Link></li>
                                        <li><Link to="/">Our Bakers</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-sm-4">
                                    <h4>Partners</h4>
                                    <ul>
                                        <li><Link to="/">Coffe Shop</Link></li>
                                        <li><Link to="/">Cafe</Link></li>
                                        <li><Link to="/">Restaurants</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <hr/>
                            <div className="copyright">lorem ipsum</div>
                        </div>                    
                    </Content>
                    </Router>

            </ContainerFooter>
        )
    }
}

export default Footer;