import React, { Component } from "react";
import {ContainerMap} from "./style";

class Map extends Component {
    render() {
        return(
            <ContainerMap>
                <div className="google-maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6664270097594!2d106.82496411518466!3d-6.175392395529179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen+Nasional!5e0!3m2!1sid!2sid!4v1555926259955!5m2!1sid!2sid" allowfullscreen></iframe>
                </div>
            </ContainerMap>
        )
    }
}

export default Map;