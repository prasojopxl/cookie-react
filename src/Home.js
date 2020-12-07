import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        )
    }
}

export default Home;