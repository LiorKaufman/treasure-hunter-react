import React, { Component } from 'react';
import './App.css';

import Board from './Board';
import Square from './Square';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 9,
            gameStatus: true,
        }
    }

    setCount = () => {
        let x = this.state.count
        if (x >= 1) {
            this.setState({ count: x - 1 })
        } else {
            alert('You lose!')
        }
    }
    toggleGameStatus = () => {
        let x = this.state.gameStatus
        this.setState({ gameStatus: !x })
        this.setState({ count: 9 })
        // randomize the values
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <Board
                setCount     = { this.setCount }
                gameStatus   = { this.state.gameStatus }
                changeStatus = { this.toggleGameStatus }
                />

                <p>{ this.state.count }</p>

                { !this.state.gameStatus &&
                <button
                onClick = { this.toggleGameStatus }
                >
                Start Game
                </button>}

                { this.state.gameStatus &&
                <button
                onClick = { this.toggleGameStatus }
                >
                Reset Game
                </button> }
            </div>
        );
    }
}

export default App;
