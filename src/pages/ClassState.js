import { Component } from "react";

class ClassState extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            name: "hello"
        }
    }

    inc = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    dec = () => {
        const counter = this.state.count
        this.setState({
            count:counter>0?counter-1:counter
        })
    }

    changename = () => {
        this.setState({
            name:"world",
        })
    }
    render() {
        return (
            <>
                <div className="col-4 mx-auto my-5 p-5 shadow text-center counter">
                    <h3>Counter {this.state.count}</h3>
                    <p>{this.state.name}</p>
                    <button onClick={this.changename} className="btn btn-dark mx-4">Change Name</button>
                    <button onClick={this.inc} className="btn btn-dark mx-4">+</button>
                    <button onClick={this.dec} className="btn btn-dark">-</button>
                </div>
            </>
        )
    }
}

export default ClassState