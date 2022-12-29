/**
Rules:
- Rock Beats Scissors
- Scissors Beats Paper
- Paper Beats Rock
- Same Moves Result in Draw
*/

const gameWord= Object.freeze({
    rock:"Rock",
    paper:"Paper",
    scissors:"Scissors"
})
const gameResult=Object.freeze({
    playerOne:"Player one win",
    playerTwo:"Player two win",
    draw: "Is a draw"
})

const game = (playerOne,playerTwo) => {
    if(playerOneWin(playerOne,playerTwo)){
        return gameResult.playerOne
    } else if(playerTwoWin(playerOne,playerTwo)){
        return gameResult.playerTwo
    }else{
        return gameResult.draw
    }
    
}

const playerOneWin=(playerOne,playerTwo)=>{
    if((playerOne===gameWord.paper &&playerTwo===gameWord.rock) || 
    (playerOne===gameWord.scissors &&playerTwo===gameWord.paper) ||
    (playerOne===gameWord.rock &&playerTwo===gameWord.scissors)){
        return true
    }else{
        return false
    }
}

const playerTwoWin=(playerOne,playerTwo)=>{
    if((playerTwo===gameWord.paper &&playerOne===gameWord.rock) || 
    (playerTwo===gameWord.scissors &&playerOne===gameWord.paper) ||
    (playerTwo===gameWord.rock &&playerOne===gameWord.scissors)){
        return true
    }else{
        return false
    }
}

export { game, gameResult, gameWord };