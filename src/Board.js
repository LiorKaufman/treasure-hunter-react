import React, { Component } from 'react';
import './App.css';
import Square from './Square'
import questionMark from './question.jpg'
import treasure from './treasure.jpeg'
import treeIMG from './tree.jpeg'

export default class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [
                {
                    data: 0,
                    cardValue: 'Tree',
                    cardImage: questionMark,
                    clicked: 'false',
                },
                {
                    data: 1,
                    cardValue: 'Treasure',
                    cardImage: questionMark,
                    clicked: 'false',

                },
                {
                    data: 2,
                    cardValue: 'Tree',
                    cardImage: questionMark,
                    clicked: 'false',
                },
                {
                    data: 3,
                    cardValue: 'Tree',
                    cardImage: questionMark,
                    clicked: 'false',
                },
                {
                    data: 4,
                    cardValue: 'Tree',
                    cardImage: questionMark,
                    clicked: 'false',
                },
                {
                    data: 5,
                    cardValue: 'Tree',
                    cardImage: questionMark,
                    clicked: 'false',
                },
                {
                    data: 6,
                    cardValue: 'Tree',
                    cardImage: questionMark,
                    clicked: 'false',
                },
                {
                    data: 7,
                    cardValue: 'Tree',
                    cardImage: questionMark,
                    clicked: 'false',
                },
                {
                    data: 8,
                    cardValue: 'Tree',
                    cardImage: questionMark,
                    clicked: 'false',
                },
            ],
            theBoard:[],
        }
    }

    checkCardValue = (value,data) => {
        if (value === 'Treasure') {
            alert('You Win!')
            this.setClicked(data)
            // this.props.changeStatus()
            // this.props.endGame()
            // Update icon to treasure chest
        } else {
            this.props.setCount()
            this.setClicked(data)
        }
    }

    setClicked = (position) => {
        let x = this.state.cards
        let y = []
        y = [...x]

        for (let i = 0; i < 9; i++) {
            if (y[i].data == position) {
                y[i].clicked = 'true'
                y[i].cardImage = treeIMG
                if (y[i].cardValue ==="Treasure") {
                    y[i].cardImage = treasure
                }
            }
        }
        this.setState({cards:y})
        this.repopulateArray()

    }

    repopulateArray = () => {
        let newArr = []
        for (let i = 0; i < 9; i++) {
            newArr.push(
                <Square
                key            = { this.state.cards[i].data }
                datax          = { this.state.cards[i].data}
                cardValue      = { this.state.cards[i].cardValue }
                checkCardValue = { this.checkCardValue }
                cardImage      = { this.state.cards[i].cardImage }
                clicked        = { this.state.cards[i].clicked }
               />
            )
        }
        this.setState({theBoard:newArr})
    }
    randomize = () => {
        let newArr = []
        for (let i = 0; i < 9; i++) {
            newArr.push(
                <Square
                key            = { this.state.cards[i].data }
                cardValue      = { this.state.cards[i].cardValue }
                checkCardValue = { this.checkCardValue }
                cardImage      = { this.state.cards[i].cardImage }
                clicked        = { this.state.cards[i].clicked }
               />
            )
        }
        
        this.setState({theBoard:newArr.sort(() => Math.random() - 0.5)})
    }
    render() {
        if (!this.props.gameStatus) {
            return(
                <div>
                    <button onClick={this.randomize} > Shuffle the Board </button>
                    <div className = 'board-wrap'>
                    { this.state.theBoard }
                    </div>
                </div>)
        } else {
            return (
                <div>Press Start!</div>
            )
        }
    }
}
