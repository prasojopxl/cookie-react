import React, { Component } from 'react';
import BanerPages from "../components/banerpages"
import Filter from '../components/filter';
import Paging from '../components/Paging';
import ProductPage from '../components/productlist/productpage';
import Contact from "../components/contact";
import Partner from "../components/partner";

class Products extends Component {
    render() {
        return (
            <React.Fragment>
                <BanerPages subtitle="GREAT" title="Products"/>    
                <Filter/>
                <ProductPage/>
                <Paging/>
                <Contact/>
                <Partner/>
            </React.Fragment>
        )
    }
}

export default Products;