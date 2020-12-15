import React, { Component } from "react";
import {ContainerBlogDetail, Tags} from "./style";
import {FormStyle} from "../../assets/css";
import {BrowserRouter as Router, Link} from "react-router-dom";
import imgblogbig from "../../assets/images/imgblogbig.jpg";
import imgblog1 from "../../assets/images/imgblog1.jpg";
import imgblog2 from "../../assets/images/imgblog2.jpg";
import imguser1 from "../../assets/images/imguser1.jpg";
import imguser2 from "../../assets/images/imguser2.jpg";
import imguser3 from "../../assets/images/imguser3.jpg";
import imglate1 from "../../assets/images/imglate1.jpg";
import imglate2 from "../../assets/images/imglate2.jpg";
import imglate3 from "../../assets/images/imglate3.jpg";


class BlogSide extends Component {
    render() {
        return (
            <ContainerBlogDetail>
                <Router>
                <div className="content">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-md-12">
                                    <section>
                                        <img src={imgblogbig} alt=""/>
                                    </section>
                                    <section>
                                        <h3>Lorem Ipsum</h3>
                                        <div className="wrp-postinfo">
                                            <div className="date item-postinfo">January 12 ,2020</div>
                                            <div className="user item-postinfo">Admin</div>
                                            <div className="value-comments item-postinfo">5 comments</div>
                                        </div>
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
                                    <div className="wrp-userblog">
                                        <div className="imgwrp">
                                            <img src={imguser1} alt=""/>
                                        </div>
                                        <div className="contenttxt">
                                            <h5>Admin: Joseph</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="wrp-commentblog">
                                        <h4>Comment (1)</h4>
                                        <div className="wrp-listcommentblog">
                                            <div className="wrp-userblog">
                                                <div className="imgwrp">
                                                    <img src={imguser2} alt=""/>
                                                </div>
                                                <div className="contenttxt">
                                                    <h5>Joana</h5>
                                                    <div className="wrp-postinfo"><div className="date item-postinfo">January 12 ,2020</div></div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <Link to="/" className="replay">replay</Link></p>
                                                </div>
                                            </div>
                                            <div className="wrp-userblog sub">
                                                <div className="imgwrp">
                                                    <img src={imguser3} alt=""/>
                                                </div>
                                                <div className="contenttxt">
                                                    <h5>Lisa</h5>
                                                    <div className="wrp-postinfo"><div className="date item-postinfo">January 12 ,2020</div></div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <Link to="/" className="replay">replay</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="wrp-sendmessage">
                                        <h4>Send Message</h4>
                                        <FormStyle>
                                            <form className="contactform" action="">
                                                <input type="text" placeholder="Name*"/>
                                                <input type="phone" placeholder="Phone*"/>
                                                <input type="email" placeholder="Email*"/>
                                                <textarea placeholder="Message*"></textarea>
                                                <input type="submit" value="SUBMIT" class="btn"/>
                                            </form>                   
                                        </FormStyle>                         
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="wrp-sidebar sticky">
                                <h4 className="title">Search</h4>
                                <div className="wrp-search">
                                    <input type="text"/>
                                    <input type="submit" value=""/>
                                </div>
                                <h4 className="title">Latest Posts</h4>
                                <div className="wrp-imglate">
                                    <div className="main">
                                        <div className="imgwrp"><img src={imglate1} alt=""/></div>
                                    </div>
                                    <div className="sub">
                                        <div className="imgwrp"><img src={imglate2} alt=""/></div>
                                        <div className="imgwrp"><img src={imglate3} alt=""/></div>
                                    </div>
                                </div>
                                <h4 class="className">Archives</h4>
                                <div className="wrp-archivelist">
                                    <ul>
                                        <li><Link>January 2020</Link></li>
                                        <li><Link>December 2019</Link></li>
                                        <li><Link>November 2019</Link></li>
                                        <li><Link>October 2019</Link></li>
                                    </ul>
                                </div>
                                <Tags>
                                    <h4 className="title">Tags</h4>
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

export default BlogSide;