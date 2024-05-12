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
const wins1 = document.querySelector("#wins1")
const losses1 = document.querySelector("#losses1")
const wins2 = document.querySelector("#wins2")
const losses2 = document.querySelector("#losses2")
const diceImage1 = document.querySelector("#diceImage1")
const diceImage2 = document.querySelector("#diceImage2")
let picture = document.querySelector("#picture")

//////V[ARIABLES//////////////
const diceImages = [
    "/Users/sebastiancuellar/Downloads/1dice.gif", // side 1
    "/Users/sebastiancuellar/Downloads/#2sidedice.gif", // side 2
    "/Users/sebastiancuellar/Downloads/#3sidedice.gif", // side 3
    "/Users/sebastiancuellar/Downloads/#4sidedice.gif", // side 4
    "/Users/sebastiancuellar/Downloads/#5sidedice.gif", // side 5
    "/Users/sebastiancuellar/Downloads/#6sidedice.gif"  // side 6
]




//////FUNCTIONS//////////////

//function that creates a random number between 1-6

/*function rollDice() {
    return Math.floor(Math.random() * 6) +1
}
*/

function rollDice() {
num = Math.floor(Math.random() * 6) + 1;
return num
}

//create a function that checks whose number is higher

function checkWinner(outcome1, outcome2) {
  if(outcome1 > outcome2) {
   currentWins1 = parseInt(wins1.innerText)
   wins1.innerText = currentWins1 +=1
    currentLosses2 = parseInt(losses2.innerText)
    losses2.innerText = currentLosses2 += 1
    outComeDisplay.innerText = `Player 1 rolled ${outcome1} and is the Winner!`
  }else if(outcome1 < outcome2) {
    currentWins2 = parseInt(wins2.innerText)
   wins2.innerText = currentWins2 +=1
   currentLosses1 = parseInt(losses1.innerText)
    losses1.innerText = currentLosses1 += 1
    outComeDisplay.innerText = `Player 2 rolled ${outcome2} and is the Winner!`
  }else{
    outComeDisplay.innerText = "It's a tie.."
  }
}




//make a function that adds a win/loss to the tallyboard each roll

///////EVENT LISTENERS///////
//assign an event listener that adds a random number to each of the dice

rollButton.addEventListener('click', () => {
   let dice2Outcome = rollDice()
   let dice1Outcome = rollDice()
   dice1.innerText = `${dice1Outcome}`
   dice2.innerText = `${dice2Outcome}`
   
   diceImage1.src = diceImages[dice1Outcome - 1]  // dice1Outcome - 1 because array indices start from 0
   diceImage2.src = diceImages[dice2Outcome - 1]

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

        
