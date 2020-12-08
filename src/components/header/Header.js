import React, { Component } from "react";
import logo from '../../assets/images/logo.svg';
import {ContainerHeader, Left, Right} from "./style"
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {Content} from "../../assets/css";

import Home from "../../pages/home";
import About from "../../pages/about";
import Products from "../../pages/products";
import Blog from "../../pages/blog";
import Contact from "../../pages/contact";
// import Home from "../../Main";



export default class Header extends Component {
    render() {
        return (
            <Router>
                <ContainerHeader>
                        <Left>
                            <Link to="/"><img src={logo} alt=""/>LOREM IPSUM</Link>
                        </Left>
                        <Right>                        
                            <div className="mainmenu">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/products">Products</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </Right>          
                </ContainerHeader>


                <Switch>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/products">
                        <Products/>
                    </Route>
                    <Route path="/blog">
                        <Blog/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
                

            </Router>
        )
    }
}


