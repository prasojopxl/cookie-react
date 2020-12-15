import React, { Component } from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import {ContainerBlogDetail, Tags} from "./style";
import imgblog1 from "../../assets/images/imgblog1.jpg";
import imgblog2 from "../../assets/images/imgblog2.jpg";

class BlogDetail extends Component {
    render() {
        return (
            <ContainerBlogDetail>
            <Router>
                <div className="wrp-blogsingle">
                    <div className="content">
                        <div className="row">
                            <div className="col-md-6">
                                <section><p className="paper"><span className="big">C</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p></section>                        
                            </div>
                            <div className="col-md-6">
                                <section><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p></section>                        
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <section>
                                    <h4>Our Good Products</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </section>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <section>
                                <img src={imgblog1} alt=""/>
                                </section>
                            </div>
                            <div className="col-md-6">
                                <section>
                                    <img src={imgblog2} alt=""/>
                                </section>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <section>
                                    <h4>Our Good Products</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </section>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <Tags>
                                    Tags:
                                    <ul>
                                        <li><Link>cookie</Link></li>
                                        <li><Link>choco</Link></li>
                                        <li><Link>bake</Link></li>
                                    </ul>
                                </Tags>
                            </div>
                        </div>
                    </div>
                </div>                
            </Router>
            </ContainerBlogDetail>
        )
    }
}

export default BlogDetail;