import React, { Component } from "react";
import logo from '../../assets/images/logo.svg';
import {ContainerHeader, Left, Right} from "./style"
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import About from "../../About";
import Contact from "../../Contact";



export default class Header extends Component {
    render() {
        return (
            <Router>
                <ContainerHeader>
                    <Left>
                        <Link to="/"><img src={logo} alt=""/></Link>
                    </Left>
                    <Right>                        
                        <div className="mainmenu">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
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
                    <Route path="/">
                        ini Home Page
                    </Route>
                </Switch>
                

            </Router>
        )
    }
}


