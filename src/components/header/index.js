import React, { Component } from "react";
import logo from '../../assets/images/logo.svg';
import {ContainerHeader, LeftHeader, RightHeader} from "./style"
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {Content} from "../../assets/css";

import Home from "../../pages/home";
import About from "../../pages/about";
import Products from "../../pages/products";
import BlogSingle from "../../pages/blogsingle";
import Contact from "../../pages/contact";
import BlogSidebar from "../../pages/blogsidebar";
// import Home from "../../Main";



export default class Header extends Component {
    render() {
        return (
            <Router>
                <ContainerHeader>
                    <Content>
                        <div className="mainmenu">
                            <LeftHeader>
                                <Link to="/"><img src={logo} alt=""/>LOREM IPSUM</Link>
                            </LeftHeader>
                            <RightHeader>                        
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/products">Products</Link></li>
                                        <li className="submenu"><Link to="/single">Blog</Link>
                                            <ul>
                                                <li><Link to="/blogsingle">Single Page 1</Link></li>
                                                <li><Link to="/blogsidebar">Single Page 2</Link></li>
                                            </ul>                                        
                                        </li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                    </ul>
                            </RightHeader>       
                        </div>
                    </Content>   
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
                    <Route path="/blogsingle">
                        <BlogSingle/>
                    </Route>
                    <Route path="/blogsidebar">
                        <BlogSidebar/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
                

            </Router>
        )
    }
}


