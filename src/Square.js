import React, { Component } from 'react';
import './App.css';

export default class Square extends Component {

    handleClick = (e) => {
        let clicked = e.target.getAttribute('clicked')
        let value = e.target.getAttribute('value')
        let data = e.target.getAttribute('datax')

        if (clicked === 'false') {
            this.props.checkCardValue(value,data)
        } else if (clicked === 'true') {

        }
    }
    render() {
        return (
            <div
            className = "square"
            onClick   = { this.handleClick }
            datax     = { this.props.datax }
            value     = { this.props.cardValue }
            clicked   = { this.props.clicked }
            >
                <div><img src={this.props.cardImage}/></div>
            </div>
        );
    }
}
