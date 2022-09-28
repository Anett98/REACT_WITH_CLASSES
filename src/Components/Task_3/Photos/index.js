import { Component } from "react";


class PhotoSettings extends Component {
    render() {
        const {id, country,src} = this.props
        return (
            <div className="country">
            <img className="countryImg" src={src} alt = {id}></img>
            <div className="name">{country}</div>
            </div>
        )
    }
}

export default PhotoSettings;