import React, { Component } from 'react';

class TeaListing extends Component {
    constructor(){
        super();
        this.state = {
            quantity: 0,
            milk: false
        }
        this.addQuantity = this.addQuantity.bind(this);
        this.subQuantity = this.subQuantity.bind(this);
    }

    addQuantity() {
        const { quantity } = this.state;
        const { quantityInStock } = this.props;
        if (quantity < quantityInStock) {
            this.setState(({quantity}) => ({quantity: quantity + 1}))
        }
    }
    subQuantity() {
        const { quantity } = this.state;
        if (quantity > 0) {
            this.setState(({quantity}) => ({quantity: quantity - 1}))
        }
    }
    render() {
        const { teaName, quantityInStock } = this.props;
        const { quantity } = this.state;
        return(
        <li className="list-group-item">
            <div>
            {teaName}
            </div>
            <div>
            Em Estoque: {quantityInStock}
            </div>
            <button type="button" className="btn btn-primary" onClick={this.addQuantity} >+</button>
            {quantity}
            <button type="button" className="btn btn-primary" onClick={this.subQuantity}>-</button>
        </li>
        );
    }
};

export default TeaListing;