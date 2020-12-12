import React, { Component } from 'react';
import Header from './components/header/';
import Footer from './components/footer/';
import {GlobalStyle} from "./assets/css"

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <GlobalStyle/>            
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Main;