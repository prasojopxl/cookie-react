import React, { Component } from 'react';
import BanerPages from "../components/banerpages";
import BlogSide from "../components/blogdetail/blogside"

class BlogSidebar extends Component {
    render() {
        return (
            <React.Fragment>
                <BanerPages subtitle="BLOG" title="Side Bar"/>
                <BlogSide/>
            </React.Fragment>
        )
    }
}

export default BlogSidebar;