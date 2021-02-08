import React, { useState } from 'react'

import Square from './Square'

const calculateWinner = squares => {
    const lines = [
        //horizontal
        [0,1,2],
        [3,4,5],
        [6,7,8],
        //vertical
        [0,3,6],
        [1,4,7],
        [2,5,8],
        //diagonal
        [0,4,8],
        [2,4,6]
    ]

    for(let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]

        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }

    return ''
}

const Board = () => {
    const [state, setstate] = useState(
        {
            squares: ['','','','','','','','',''],
            xIxNext: true
        }
    )

    const handleClick = number => () => {
        if(calculateWinner(state.squares) || state.squares[number]) {
            //the place is already taken
            return
        }
        const newState = [...state.squares]
        console.log(newState)
        console.log(number)
        newState[number] = state.xIxNext ? 'X' : 'O'
        setstate(
            {
                squares: newState,
                xIxNext: !state.xIxNext
            }
        )
    }

    const handleReset = () => {
        setstate(
            {
                squares: ['','','','','','','','',''],
                xIxNext: true
            }
        )
    }

    const winner = calculateWinner(state.squares)
    let status 
    if(winner) {
        status = `winner ${winner}`
    } else {
        status = `Next Step: ${state.xIxNext ? 'X' : 'O'}`
    }

    return (
        <div className='board'>
            <h1>{status}</h1>
            <div className='row'>
                <Square value = {state.squares[0]} onClick={handleClick(0)}/>
                <Square value = {state.squares[1]} onClick={handleClick(1)}/>
                <Square value = {state.squares[2]} onClick={handleClick(2)}/>
            </div>
            <div className='row'>
                <Square value = {state.squares[3]} onClick={handleClick(3)}/>
                <Square value = {state.squares[4]} onClick={handleClick(4)}/>
                <Square value = {state.squares[5]} onClick={handleClick(5)}/>
            </div>
            <div className='row'>
                <Square value = {state.squares[6]} onClick={handleClick(6)}/>
                <Square value = {state.squares[7]} onClick={handleClick(7)}/>
                <Square value = {state.squares[8]} onClick={handleClick(8)}/>
            </div>
            <button onClick={handleReset} className='reset'>Reset</button>
        </div>
    )
}

export default Board