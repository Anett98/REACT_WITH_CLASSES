import { Component } from "react";

import './index.css'


class Counter extends Component{
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSub = this.handleSub.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.handleStartInpChange = this.handleStartInpChange.bind(this)
        this.handleEndInpChange = this.handleEndInpChange.bind(this)
        this.handleStepInpChange = this.handleStepInpChange.bind(this)
        this.state = {
             count:0,
             start:'',
             end:'',
             step:'',
        }
    }

    handleAdd() {
        const{count,end, step} = this.state
        if(count < +end && (count+(+step))<=+end) {
            this.setState({count:count +(+step)})
        }
    }
 
    handleSub() {
        const{count,start, step} = this.state
        if(count > +start && (count-(+step))>=+start) {
            this.setState({count:count -step})
        }
    }
    
    handleReset() {
        this.setState({count:+this.state.start})
    }

    handleStartInpChange (e) {
        this.setState({start: e.target.value})
    }

    handleEndInpChange (e) {
        this.setState({end: e.target.value})
    }

    handleStepInpChange (e) {
        this.setState({step: e.target.value})
    }


    render() {
        const {step,start,end} = this.state
        return (
            <div className="app">
            <div>
             <input type='number' className="inputs" placeholder="minimal value" onChange={this.handleStartInpChange} value={start}/>
             <input type='number' className="inputs" placeholder="maximal value" onChange={this.handleEndInpChange} value={end}/>
             <input type='number' className="inputs" placeholder="step" onChange={this.handleStepInpChange} value={step}/>
            </div>
            <div>
                <div className="count">{this.state.count}</div>
                <button className="addBtn" onClick={this.handleAdd}>+</button>
                <button className="subBtn" onClick={this.handleSub}>-</button>
                <button className="resetBtn" onClick={this.handleReset}>Reset</button>   
            </div>
            </div>
        )
    }
}
export default Counter;