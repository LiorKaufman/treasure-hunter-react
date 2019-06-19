import React, { Component } from 'react';
import './App.css';

export default class Square extends Component {
    handleClick = (e) => {
        let x = e.target.getAttribute('value')
        alert(x)
        this.props.checkCardValue(x)
        // this.props.setCount()
    }
    render() {
        // let x= img.src
        // let treeimg = img.src2
        return (
            <div
            className = "square"
            onClick   = { this.handleClick }
            data      = { this.props.data }
            value     = { this.props.cardValue }
            >
            ?
            </div>
        );
    }
}
