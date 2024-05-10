///////CONSTANTS/////////
const rollButton = document.querySelector("#rollButton")
const dice1 = document.querySelector("#dice1")
const dice2 = document.querySelector("#dice2")
const outComeDisplay = document.querySelector("#outcomeDisplay")
const button1 = document.querySelector("#name1Btn")
const button2 = document.querySelector('#name2Btn')
const input1 = document.querySelector("#inputName1")
const input2 = document.querySelector("#inputName2")
const nameBox1 = document.querySelector("#first")
const nameBox2 = document.querySelector("#second")
//////VARIABLES//////////////




//////FUNCTIONS//////////////

//function that creates a random number between 1-6

function rollDice() {
    return Math.floor(Math.random() * 6) +1
}

//create a function that checks whose number is higher

function checkWinner(outcome1, outcome2) {
  if(outcome1 > outcome2) {
    outComeDisplay.innerText = `Player 1 rolled ${outcome1} and is the Winner!`
  }else if(outcome1 < outcome2) {
    outComeDisplay.innerText = `Player 2 rolled ${outcome2} and is the Winner!`
  }else{
    outComeDisplay.innerText = "It's a tie.."
  }
}

///////EVENT LISTENERS///////
//assign an event listener that adds a random number to each of the dice

rollButton.addEventListener('click', () => {
   let dice2Outcome = rollDice()
   let dice1Outcome = rollDice()
   dice1.innerText = `${dice1Outcome}`
   dice2.innerText = `${dice2Outcome}`
checkWinner(dice1Outcome, dice2Outcome)
    
})

//Make two buttons and add an event listener that takes the text from the input bars and assigns the name entered to the Player 1, and Player 2

button1.addEventListener('click', () => {
    let name = input1.value
    nameBox1.innerText = `${name}`
        console.log("working")
    })

    button2.addEventListener('click', () => {
        let name = input2.value
        nameBox2.innerText = `${name}`
            console.log("working")
        })
