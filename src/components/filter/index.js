import React, { Component } from "react";
import {ContainerFilter} from "./style";


class Filter extends Component {
    render() {
        return(
            <ContainerFilter>
                <div class="content">
                    <div class="left">
                        Showing 1-9 of 256 Results
                    </div>
                    <div class="right">
                        <div class="wrp-search">
                            <input type="search" placeholder="Search"/>
                        </div>
                        <div class="select_custom">
                            <select name="" id="">
                                <option value="">Sort by default</option>
                                <option value="">Price</option>
                                <option value="">Rate</option>
                            </select>
                            <div class="select_icon"><i class="fa fa-caret-down"></i> </div>
                        </div>
                    </div>
                </div>
            </ContainerFilter>
        )
    }
}

export default Filter;