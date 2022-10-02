import { Component } from "react";

import Wrapper from "../Wrapper";

import '../CardSetings/index.css'

class Container extends Component {
    constructor (props) {
        super(props)
        this.state = {
            cards: [{src:"https://i.pinimg.com/564x/b6/25/fa/b625fa02fb9b6c2946a730ff0b3fe3f5.jpg",id:1, unmounting:0},
                         {src:"https://i.pinimg.com/564x/94/f3/75/94f375a1b67763c82cf25955b6f2ba8f.jpg",id:2, unmounting:0},
                         {src:"https://i.pinimg.com/564x/1f/42/fa/1f42faffb3042d44955133e730320eea.jpg",id:3, unmounting:0},
                         {src:"https://i.pinimg.com/564x/2a/a3/a3/2aa3a33ef7a05d943459222c41c64dc3.jpg",id:4, unmounting:0},
                         {src:"https://i.pinimg.com/736x/82/af/07/82af0789c81918652d665981ff83dc3b.jpg",id:5, unmounting:0}
                     ],
                    showUnmounted: false,
         }
         this.handleUnmount = this.handleUnmount.bind(this)
    }

    handleUnmount () {
        this.setState({showUnmounted: !this.state.showUnmounted})
    }

    render() {
        const {cards} = this.state
        return(
            <>
            <div className="container">
             { this.state.cards.map(card=> <Wrapper card = {card} src = {card.src} key = {card.id}/>)}
            </div>
            <div className="unmountDiv">
                <button className="unmBtn" onClick={this.handleUnmount}>SHOW UNMOUNT COUNT</button>
                {
                    this.state.showUnmounted? <div> {cards.map(card=> <div key={card.id}>{`Photo ${card.id}: unmounted count: ${card.unmounting}`}</div>)} </div> : ''
                }
            </div>
            </>
        )
    }
}

export default Container;