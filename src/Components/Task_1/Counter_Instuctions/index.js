import { Component } from "react";


class Inputs extends Component {

    constructor(props) {
        super(props)
        this.handleStartInpChange = this.handleStartInpChange.bind(this)
        this.handleEndInpChange = this.handleEndInpChange.bind(this)
        this.handleStepInpChange = this.handleStepInpChange.bind(this)
        this.state = {
            start:'',
            end:'',
            step:'',
        }
    }

    handleStartInpChange (e) {
        this.setState({count: this.state.count + +e.target.value})
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
            <>
            <div>
             <input type='number' className="inputs" placeholder="minimal value" onChange={this.handleStartInpChange} value={start}/>
             <input type='number' className="inputs" placeholder="maximal value" onChange={this.handleEndInpChange} value={end}/>
             <input type='number' className="inputs" placeholder="step" onChange={this.handleStepInpChange} value={step}/>
            </div>            </>
        )
    }
}
export default Inputs;