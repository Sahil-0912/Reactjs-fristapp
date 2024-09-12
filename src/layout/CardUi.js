import { Component } from "react";

class CardUi extends Component{
    render(){
        return(
            <div className="card my-5 p-2 shadow">
            <img src={this.props.image} className='w-100'/>
            <div className="card-body">
                <h5>{this.props.title}</h5>
                <p className="text-secondary">{this.props.para}</p>
            </div>
            <button className="btn btn-outline-danger mb-3 w-75 mx-5">Add to Cart</button>
        </div>
        )
    }
}

export default CardUi