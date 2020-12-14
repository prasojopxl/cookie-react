import React, { Component } from "react";
import {ContainerProfile} from "./style";
import About from "../../assets/images/about.jpg";
import About2 from "../../assets/images/about-xs.png";

class Profile extends Component {
    render() {
        return (
            <ContainerProfile>
                <div className="content">
                    <div className="left">
                        <div className="imgwrp">
                            <img src={About}  className="hidden-xs" alt=""/>
                            <img src={About2}  className="visible-xs" alt=""/>
                        </div>
                    </div>
                    <div className="right">
                        <div className="contentinfo">
                            <h3>Lipsum</h3>
                            <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>
                </div>                
            </ContainerProfile>
        )
    }
}

export default Profile;