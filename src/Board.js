import React, { Component } from 'react';
import './App.css';
import Square from './Square'
export default class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [
                {
                    data: 0,
                    cardValue: 'Tree'
                },
                {
                    data: 1,
                    cardValue: 'Treasure'
                },
                {
                    data: 2,
                    cardValue: 'Tree'
                },
                {
                    data: 3,
                    cardValue: 'Tree'
                },
                {
                    data: 4,
                    cardValue: 'Tree'
                },
                {
                    data: 5,
                    cardValue: 'Tree'
                },
                {
                    data: 6,
                    cardValue: 'Tree'
                },
                {
                    data: 7,
                    cardValue: 'Tree'
                },
                {
                    data: 8,
                    cardValue: 'Tree'
                },
            ],
            image: "XXX",
        }
    }

    checkCardValue = (value) => {
        if (value === 'Treasure') {
            alert('You Win!')
            this.props.changeStatus()
            // this.props.endGame()
            // Update icon to treasure chest
        } else {
            this.props.setCount()
        }
    }


    render() {
        if (!this.props.gameStatus) {
            return(
                <div>
                <Square
                data           = { this.state.cards[0].data }
                cardValue      = { this.state.cards[0].cardValue }
                checkCardValue = { this.checkCardValue }
                />
                <Square
                data           = { this.state.cards[1].data }
                cardValue      = { this.state.cards[1].cardValue }
                checkCardValue = { this.checkCardValue }
                image          = { this.state.image }
                />
                </div>
            )
        } else {
            return (
                <div>Press Start!</div>
            )
        }
    }
}
