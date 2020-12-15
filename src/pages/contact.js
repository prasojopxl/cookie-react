import React, { Component } from 'react';
import BanerPages from "../components/banerpages";
import ContactFrom from "../components/contactform";
import Map from "../components/map";

class Contact extends Component {
    render() {
        return (
            <div>
                <BanerPages subtitle="LET'S" title="Contact Us"/>
                <ContactFrom/>
                <Map/>
            </div>
        )
    }
}

export default Contact;