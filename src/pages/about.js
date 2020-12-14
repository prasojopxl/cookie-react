import React, { Component } from 'react';
import BanerPages from "../components/banerpages";
import OurProduct from '../components/ourproducts';
import Profile from "../components/profile";
import Team from "../components/team";
import Order from "../components/order";
import Testimoni from "../components/testimoni";
import Contact from "../components/contact";
import News from "../components/news";
import Partner from "../components/partner";


class About extends Component {
    render() {
        return (
            <React.Fragment>
                <BanerPages subtitle="story" title="About Us"/>
                <Profile/>
                <Team/>
                <OurProduct/>
                <Order/>
                <Testimoni/>
                <Contact/>
                <News/>
                <Partner/>
            </React.Fragment>
        )
    }
}

export default About;