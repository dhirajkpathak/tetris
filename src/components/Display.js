import React from 'react'
import { StyledDisplay } from './styles/StyledDisplay'

function Display({gameOver, text}) {
    return (
        <StyledDisplay gameover={gameOver}>
            {text}
        </StyledDisplay>
    )
}

export default Display
