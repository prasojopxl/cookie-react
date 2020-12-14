import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import { Content } from '../../assets/css';
import {ContainerFooter} from "./style";


class Footer extends Component {
    render() {
        return (
            <ContainerFooter>
                    <Router>
                    <Content>
                        <div className="content">
                            <div className="row">
                                <div className="col-md-12">
                                        <Link to="/">
                                            <img src="assets/images/logo.svg" class="logo" alt=""/>
                                            LOREM IPSUM
                                        </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam et nibh condimentum venenatis eu ac magnasin. Quisque </p>
                                    <ul className="socmed">
                                        <li><Link><img src="assets/images/icon_fb.svg" alt=""/></Link></li>
                                        <li><Link><img src="assets/images/icon_tw.svg" alt=""/></Link></li>
                                        <li><Link><img src="assets/images/icon_in.svg" alt=""/></Link></li>
                                        <li><Link><img src="assets/images/icon_pint.svg" alt=""/></Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-sm-4">
                                    <h4>About</h4>
                                    <ul>
                                        <li><Link>About Us</Link></li>
                                        <li><Link>Services</Link></li>
                                        <li><Link>Testimonials</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-sm-4">
                                    <h4>Contact</h4>
                                    <ul>
                                        <li><Link>Booking</Link></li>
                                        <li><Link>Contact</Link></li>
                                        <li><Link>Our Bakers</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-sm-4">
                                    <h4>Partners</h4>
                                    <ul>
                                        <li><Link>Coffe Shop</Link></li>
                                        <li><Link>Cafe</Link></li>
                                        <li><Link>Restaurants</Link></li>
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