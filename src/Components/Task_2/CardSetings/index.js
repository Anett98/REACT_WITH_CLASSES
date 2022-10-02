import { Component } from "react";
import './index.css'

class CardSettings extends Component {
    componentWillUnmount() {
        this.props.card.unmounting++
    }
    render() {
        const {src, card, hide} = this.props
    
        return (
            <div>
              <img className="images" src={src} alt = {card.id}/>
                <button className="closeBtn" onClick={hide}>X</button>
            </div>
        )
    }
}
 export default CardSettings;