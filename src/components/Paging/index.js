import React, { Component } from "react";
import {ContainerPaging} from "./style";
import {BrowserRouter as Router, Link} from "react-router-dom";

class Paging extends Component {
    render() {
        return (
            <Router>
                <ContainerPaging>
                    <ul>
                        <li><Link>prev</Link></li>
                        <li><Link>1</Link></li>
                        <li><Link>2</Link></li>
                        <li><Link>3</Link></li>
                        <li><Link>4</Link></li>
                        <li><Link>next</Link></li>
                    </ul>                
                </ContainerPaging>
            </Router>
        )
    }
}

export default Paging;