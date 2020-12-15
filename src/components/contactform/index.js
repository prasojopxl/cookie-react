import React, { Component } from "react";
import {ContainerContactForm} from "./style";
import {FormStyle} from "../../assets/css";

class ContactFrom extends Component {
    render () {
        return (
            <ContainerContactForm>
                <div className="content">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <div className="title-single">
                                <h4>Get In Touch</h4>
                            </div>
                            <FormStyle>
                                <input type="text" placeholder="Name*"/>
                                <input type="phone" placeholder="Phone*"/>
                                <input type="email" placeholder="Email*"/>
                                <textarea placeholder="Message*"></textarea>
                                <input type="submit" value="SUBMIT" class="btn"/>
                            </FormStyle>
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <div class="title-single">
                                <h4>Contact Info</h4>
                            </div>
                            <div class="wrp-listboxaddress">
                                <div class="itembox">
                                    <img src="assets/images/icon-address.svg" alt=""/>
                                    <h6>Address:</h6>
                                    <p>12-street pass, Newro JK, New York, USA</p>
                                </div>
                                <div class="itembox">
                                    <img src="assets/images/icon-email.svg" alt=""/>
                                    <h6>Phone:</h6>
                                    <p>+12 1232 3435 123</p>
                                </div>
                                <div class="itembox">
                                    <img src="assets/images/icon-phone.svg" alt=""/>
                                    <h6>Email:</h6>
                                    <p>loremipsum@email.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </ContainerContactForm>
        )
    }
}

export default ContactFrom;