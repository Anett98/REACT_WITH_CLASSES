import { Component } from "react";

import {DATA} from '../Data/index'

import PhotoSettings from "../Photos";

import './index.css'


class MainList extends Component {
 
    constructor(props) {
        super(props)
        this.copiedflagData = []
        this.state = {
            flagData:[],
            input: '',
        }
        this.handleInpChange = this.handleInpChange.bind(this)
    }
    componentDidMount() {
        new Promise (res=>{         
            res(DATA)
        })
        .then(res=>JSON.parse(res))
        .then(res=>{
            this.setState({flagData: res})
            this.copiedflagData = res 
        })
    }

    componentDidUpdate(props, state) {
        const {input} = this.state;
            if(state.input !== this.state.input) {
                if(input.length >= 1) {
                 this.setState({
                    flagData:  this.copiedflagData.filter(flag=>flag.country.toLowerCase().includes(input.toLowerCase()))
                  })
                } else {
                    this.setState({flagData:this.copiedflagData})
                }
            }
    }

    handleInpChange  (event)  {
        this.setState({input: event.target.value})
    }

    render() {
        const {flagData, input} = this.state;
        return (
            <>
             <div className="inputDiv">
                <h1>Flags</h1>
                <input placeholder="Search..." onChange={this.handleInpChange} value={input} type='text' id = "searchInput"/> 
                </div> 
             <div className = "container"> 
             {flagData.map(flag=> <PhotoSettings key = {flag.id} {...flag}/>)}
             </div>
              </>
        )
    }
}
export default MainList;
