import React, { Component } from 'react';
import BanerPages from "../components/banerpages";
import BlogDetail from '../components/blogdetail';


class BlogSingle extends Component {
    render() {
        return (
            <React.Fragment>
                <BanerPages subtitle="BLOG" title="Single Page"/>
                <BlogDetail/>
            </React.Fragment>
        )
    }
}

export default BlogSingle;