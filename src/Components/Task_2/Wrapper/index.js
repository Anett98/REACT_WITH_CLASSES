import { Component } from "react";

import CardSettings from "../CardSetings";

import '../CardSetings/index.css'

class Wrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isHidden: false,
        }
        this.handleHidden = this.handleHidden.bind(this)
    }
    handleHidden () {
        this.setState({isHidden: !this.state.isHidden})
    }

    render() {
        return (
            <div className="cardDiv">
                {
                    !this.state.isHidden? <CardSettings hide = {this.handleHidden} card = {this.props.card} src = {this.props.src}/> : <div> 
                        <button className="openBtn" onClick={this.handleHidden}>Open</button>
                    </div>
                }
            </div>
        )
    }
}
export default Wrapper;