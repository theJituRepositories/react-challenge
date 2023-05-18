import { useState } from 'react'

import React from 'react'

const TickTacToe = () => {
    const  [setBoard, useBoard] = useState()
    const [setPlayer, usePlayer] = useState()
    const [setWinner, useWinner] = useState()
    const [setTurn, useTurn] = useState()

    return (
        <div>
            <div onCanPlay={ setTurn}>
                <p> Player: X can Play</p>
                <p> Player: O can Play</p>
            </div>

            <div>
            <button onClick={() => setBoard("X")}>Play</button>
            <button onClick={() => setBoard("O")}>Play</button>
            </div>

            <div className='board-lines'>
                <div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
                <div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </div>
                <div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                </div>
            </div>


        </div>
    )
}

    export default TickTacToe