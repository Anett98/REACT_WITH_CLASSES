import { Component } from "react";

import {DATA} from '../Data/index'

import PhotoSettings from "../Photos";

import './index.css'


class MainList extends Component {
 
    constructor(props) {
        super(props)
        this.copiedUsers = []
        this.state = {
            users:[],
            input: '',
        }
    }
    componentDidMount() {
        new Promise ((res,rej)=>{         //is it Okay?
            res(DATA)
        })
        .then(res=>JSON.parse(res))
        .then(res=>{
            this.setState({users: res})
            this.copiedUsers = res 
        })
    }

    componentDidUpdate(props, state) {
        const {input} = this.state;
            if(state.input !== this.state.input) {
                if(input.length >= 1) {
                 this.setState({
                  users:  this.copiedUsers.filter(user=>user.country.toLowerCase().includes(input.toLowerCase()))
                  })
                } else {
                    this.setState({users:this.copiedUsers})
                }
            }
    }

    handleInpChange = (e) => {
        this.setState({input: e.target.value})
    }

    render() {
        const {users, input} = this.state;
        return (
            <>
             <div className="inputDiv">
                <h1>Flags</h1>
                <input placeholder="Search..." onChange={this.handleInpChange} value={input} type='text' id = "searchInput"/> 
                </div> 
             <div className = "container"> 
             {users.map(user=> <PhotoSettings key = {user.id} {...user}/>)}
             </div>
              </>
        )
    }
}
export default MainList;