const rollButton = document.querySelector("#rollButton")
const dice1 = document.querySelector("#dice1")
const dice2 = document.querySelector("#dice2")
const outComeDisplay = document.querySelector("#outcomeDisplay")

function rollDice() {
    return Math.floor(Math.random() * 6) +1
}

rollButton.addEventListener('click', () => {
   let newNum = rollDice()
   dice1.innerText = `${rollDice()}`
   dice2.innerText = `${rollDice()}`

    
})