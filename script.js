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
//add a const for the bank input bar
const bankBar = document.querySelector("#bankAmount")
//console.log to check it works
//add a const for enter amount button
const enterAmountBtn = document.querySelector("#enterAmount")
//add a const for both players money
const innerMoney1 = document.querySelector("#inner1")
const innerMoney2 = document.querySelector("#inner2")
const playerBankDiv = document.querySelector("#playerBankDiv")
const bettingBox = document.querySelector("#bettingBox1")
const highNumber = document.querySelector("#highNumber")
const passLine = document.querySelector("#passLine")
//make consts for bet buttons
const bet10 = document.querySelector("#bet10")
const bet20 = document.querySelector("#bet20")
const bet30 = document.querySelector("#bet30")
//add a const for the inner Pot value
const innerPot = document.querySelector("#innerPot")
const betPot = document.querySelector("#betPot")
const diceImages = [
  "1dice.gif", // side 1
  "2sidedice.jpeg", // side 2
  "3sidedice.gif", // side 3
  "4sidedice.gif", // side 4
  "5sidedice.jpeg", // side 5
  "6sidedice.gif"  // side 6
]
const crapsBetInput = document.querySelector("#crapsBet")
const forBet = document.querySelector("#for")
const againstBet = document.querySelector("#against")

const wins3 = document.querySelector("#wins3")
const losses3 = document.querySelector("#losses3")
const wins4 = document.querySelector("#wins4")
const losses4 = document.querySelector("#losses4")

const bet102 = document.querySelector("#bet102")
const bet202 = document.querySelector("#bet202")
const bet302 = document.querySelector("#bet302")
const innerPot2 = document.querySelector("#innerPot2")
const betPot2 = document.querySelector("#betPot2")
//////////////////////////V[ARIABLES////////////////////////////
////////////////////////////////////////////////////////////////

let rollOccurred = false
bettingBox.style.display = "none"
let clickCount = 0
let currentPlayer = 1
///////////////////////FUNCTIONS////////////////////////////////
////////////////////////////////////////////////////////////////

//function that creates a random number between 1-6
function rollDice() {
num = Math.floor(Math.random() * 6) + 1
return num
}
//create a function that checks whose number is higher
//make this function add wins and losses to the tallyBox
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







function awardPlayer10(outcome1, outcome2) {

  let awardMoney = parseInt(innerPot.innerText)

  let currentMoney1 = parseInt(innerMoney1.innerText)
  let currentMoney2 = parseInt(innerMoney2.innerText)
  let currentPot = parseInt(innerPot.innerText)

  if(outcome1 > outcome2 && currentPot > 0) {
    innerMoney1.innerText = currentMoney1 + 20
    innerPot.innerText = currentPot - 20
  }else if(outcome1 < outcome2 && currentPot > 0) {
    innerMoney2.innerText = currentMoney2 +20
    innerPot.innerText = currentPot - 20
  }else{
    console.log("working")
  }
    
  }

  function awardPlayer20(outcome1, outcome2) {

    let awardMoney = parseInt(innerPot.innerText)
  
    let currentMoney1 = parseInt(innerMoney1.innerText)
    let currentMoney2 = parseInt(innerMoney2.innerText)
    let currentPot = parseInt(innerPot.innerText)
  
    if(outcome1 > outcome2 && currentPot > 0) {
      innerMoney1.innerText = currentMoney1 + 40
      innerPot.innerText = currentPot - 40
    }else if(outcome1 < outcome2 && currentPot > 0) {
      innerMoney2.innerText = currentMoney2 +40
      innerPot.innerText = currentPot - 40
    }else{
      console.log("working")
    }}

    function awardPlayer30(outcome1, outcome2) {

      let awardMoney = parseInt(innerPot.innerText)
    
      let currentMoney1 = parseInt(innerMoney1.innerText)
      let currentMoney2 = parseInt(innerMoney2.innerText)
      let currentPot = parseInt(innerPot.innerText)
    
      if(outcome1 > outcome2 && currentPot > 0) {
        innerMoney1.innerText = currentMoney1 + 60
        innerPot.innerText = currentPot - 60
      }else if(outcome1 < outcome2 && currentPot > 0) {
        innerMoney2.innerText = currentMoney2 +60
        innerPot.innerText = currentPot - 60
      }else{
        console.log("working")
      }}

///////EVENT LISTENERS///////

rollButton.addEventListener('click', () => {
   if(currentMode === Modes.HIGH_NUMBER) {
  
  let dice2Outcome = rollDice()
   let dice1Outcome = rollDice()
   dice1.src = diceImages[dice1Outcome - 1]
   dice2.src = diceImages[dice2Outcome - 1]
   
   diceImage1.src = diceImages[dice1Outcome - 1]  
   diceImage2.src = diceImages[dice2Outcome - 1]

checkWinner(dice1Outcome, dice2Outcome)
let currentPot = parseInt(innerPot.innerText)
if(currentPot == 20) {
  awardPlayer10(dice1Outcome, dice2Outcome)
}else if(currentPot == 40) {
  awardPlayer20(dice1Outcome, dice2Outcome)
}else if(currentPot == 60){
  awardPlayer30(dice1Outcome, dice2Outcome)
}else{
  alert("error")
}
bet10.disabled = false
bet20.disabled = false
bet30.disabled = false

rollOccurred = true
}else if (currentMode === Modes.PASS_LINE) {
  // Logic for Pass Line mode
  let dice1Outcome = rollDice()
  let dice2Outcome = rollDice()
  dice1.src = diceImages[dice1Outcome - 1]
   dice2.src = diceImages[dice2Outcome - 1]
   
   diceImage1.src = diceImages[dice1Outcome - 1]  
   diceImage2.src = diceImages[dice2Outcome - 1]
   console.log(currentPlayer)
  // Check if it's the first roll or subsequent rolls
  if (!pointEstablished) {
      handleFirstRoll(dice1Outcome, dice2Outcome)
      
      console.log(currentPlayer)
  } else {
      handleSubsequentRoll(dice1Outcome, dice2Outcome)
      
      console.log(currentPlayer)
  }
bet10.disabled = false
bet20.disabled = false
bet30.disabled = false
}
})

//Make two buttons and add an event listener that takes the text from the input bars and assigns the name entered to the Player 1, and Player 2

button1.addEventListener('click', () => {
    let name = input1.value
    nameBox1.innerText = `${name}`
        console.log("working")
      name1.style.display = "none"
    })

    button2.addEventListener('click', () => {
        let name = input2.value
        nameBox2.innerText = `${name}`
            console.log("working")
          name2.style.display = "none"
        })

//make the betting box display only after starting cash amount has been entered


//add an event listener to the bank that adds the money amount entered in the input bar to each of the players

enterAmountBtn.addEventListener('click', () => {
  let amountOfMoney = bankBar.value
  
  if(amountOfMoney > 0) {
    innerMoney2.innerText = amountOfMoney
    innerMoney1.innerText = amountOfMoney
    playerBankDiv.style.display = "none"
    bettingBox.style.display = "block"

  }
}
)

//subtract 10 from each players bank and put it into the "pot"
//make a funtion to award whichever player that wins the money in the pot


bet10.addEventListener('click', () => {
  clickCount++
  let currentMoney1 = parseInt(innerMoney1.innerText)
  let currentMoney2 = parseInt(innerMoney2.innerText)
  
  if(currentMoney1 >= 10 && currentMoney2 >= 10) {
    innerMoney1.innerText = currentMoney1 - 10
    innerMoney2.innerText = currentMoney2 - 10
    let currentPot = parseInt(innerPot.innerText)
    innerPot.innerText = currentPot + 20
    bet10.disabled = true
      bet20.disabled = true
      bet30.disabled = true
      rollOccurred = false
  }else{
    alert("Not enough money to bet $10 for both players!")
  }
  }
)

//add event listeners for $20 and $30

bet20.addEventListener('click', () => {
  clickCount++
  let currentMoney1 = parseInt(innerMoney1.innerText)
  let currentMoney2 = parseInt(innerMoney2.innerText)
  let currentPot = parseInt(innerPot.innerText)

  if(currentMoney1 >= 20 && currentMoney2 >= 20) {
    innerMoney1.innerText = currentMoney1 - 20
    innerMoney2.innerText = currentMoney2 - 20
    innerPot.innerText = currentPot + 40
    bet10.disabled = true
      bet20.disabled = true
      bet30.disabled = true
      rollOccurred = false
  }else{
    alert("Not enough money to bet $20 for both players!")
  }
  }
)




//recreate this function for 20 and 30




  bet30.addEventListener('click', () => {
    clickCount++
    let currentMoney1 = parseInt(innerMoney1.innerText)
    let currentMoney2 = parseInt(innerMoney2.innerText)
    let currentPot = parseInt(innerPot.innerText)
  
    if(currentMoney1 >= 30 && currentMoney2 >= 30) {
      innerMoney1.innerText = currentMoney1 - 30
      innerMoney2.innerText = currentMoney2 - 30
      innerPot.innerText = currentPot + 60
      bet10.disabled = true
      bet20.disabled = true
      bet30.disabled = true
      rollOccurred = false
    }else{
      alert("Not enough money to bet $30 for both players!")
    }
    }
  )


//make an array of the two different modes

const Modes = {
  HIGH_NUMBER: "high_number",
  PASS_LINE: "pass_line"
}

currentMode =  Modes.HIGH_NUMBER

//make a function that will toggle between the two different modes


function toggleModePassLine() {
  if(currentMode === Modes.HIGH_NUMBER) {
currentMode = Modes.PASS_LINE

bettingBox.style.display = "inline"
wins3.style.display = "none"
wins4.style.display = "none"
losses3.style.display = "none"
losses4.style.display = "none"    
    console.log(currentMode)
  }else{
    currentMode = Modes.PASS_LINE
    console.log(currentMode)


  }
}
function toggleModeHighNumber() {
  if(currentMode === Modes.PASS_LINE) {
currentMode = Modes.HIGH_NUMBER
let turn = null
bettingBox.style.display = "inline"



console.log(currentMode)
  }else{
    currentMode = Modes.HIGH_NUMBER
    console.log(currentMode)


  }
}




//add event listeners that will act on the toggleMode function

passLine.addEventListener('click', toggleModePassLine)
highNumber.addEventListener('click', toggleModeHighNumber)

let pointEstablished = false
let point = null

function handleFirstRoll(outcome1, outcome2) {
    let sum = outcome1 + outcome2
    tellTurn()
    if (sum === 7 || sum === 11) {
      awardPotWinner()
      
      switchTurns()
        outComeDisplay.innerText = "Winning First Roll!"
    } else if (sum === 2 || sum === 3 || sum === 12) {
        awardPotLoser()
        
          switchTurns()
        
        outComeDisplay.innerText = "Losing First Roll"
    } else {
        // Establish point
        pointEstablished = true
        point = sum
        outComeDisplay.innerText = `Point established: ${point}`
    }
}

function handleSubsequentRoll(outcome1, outcome2) {
  let sum = outcome1 + outcome2
  tellTurn()
  if (sum === point) {
      // Win
      outComeDisplay.innerText = "You Rolled the Point! Winning Roll!"
      resetPoint()
      awardPotWinner()
      
      switchTurns()
  } else if (sum === 7) {
      // Lose
      outComeDisplay.innerText = "Losing Roll"
      resetPoint()
      awardPotLoser()
      
      switchTurns()
  } else {
      // Continue rolling
      outComeDisplay.innerText = `Roll again to hit ${point}`
  }
}

function resetPoint() {
  pointEstablished = false
  point = null
}



  function switchTurns() {
    currentPlayer = (currentPlayer === 1) ? 2 : 1
    tellTurn()
  }
/*
  function awardPot() {
    let currentMoney1 = parseInt(innerMoney1.innerText)
    let currentMoney2 = parseInt(innerMoney2.innerText)
    let currentPot = parseInt(innerPot.innerText)

    if (currentMoney1 >= 0 && currentMoney2 >= 0 && currentPot > 0) {
        if (currentMode === Modes.PASS_LINE && currentPlayer === 1) {
            if (pointEstablished) {
                // Player who established the point wins the pot
                innerMoney1.innerText = currentMoney1 + currentPot
                innerPot.innerText = 0 // Clear the pot
            } else {
                // Player who won the first roll wins the pot
                innerMoney1.innerText = currentMoney1 + currentPot
                innerPot.innerText = 0 // Clear the pot
            }
        } else if (currentMode === Modes.PASS_LINE && currentPlayer === 2) {
            if (pointEstablished) {
                // Player who established the point wins the pot
                innerMoney1.innerText = currentMoney1 + currentPot
                innerPot.innerText = 0 // Clear the pot
            } else {
                // Player 2 wins the pot in case of a losing roll
                innerMoney2.innerText = currentMoney2 + currentPot
                innerPot.innerText = 0 // Clear the pot
            }
        }else if(pointEstablished) {
          // Player who established the point wins the pot
          innerMoney2.innerText = currentMoney2 + currentPot
          innerPot.innerText = 0 // Clear the pot
      } else {
          // Player who won the first roll wins the pot
          innerMoney2.innerText = currentMoney2 + currentPot
          innerPot.innerText = 0 // Clear the pot
      }
  } else if (currentMode === Modes.PASS_LINE) {
      if (pointEstablished) {
          // Player who established the point wins the pot
          innerMoney2.innerText = currentMoney2 + currentPot
          innerPot.innerText = 0 // Clear the pot
      } else {
          // Player 2 wins the pot in case of a losing roll
          innerMoney1.innerText = currentMoney1 + currentPot
          innerPot.innerText = 0 // Clear the pot
      }
    }
}
*/
function awardPotWinner() {
  let currentMoney1 = parseInt(innerMoney1.innerText)
  let currentMoney2 = parseInt(innerMoney2.innerText)
  let currentPot = parseInt(innerPot.innerText)
  
  if (currentPlayer === 1) {
 innerMoney1.innerText = currentMoney1 + currentPot
 innerPot.innerText = 0
  }else if(currentPlayer === 2) {
    innerMoney2.innerText = currentMoney2 + currentPot
    innerPot.innerText = 0
  }
}

function awardPotLoser() {
  let currentMoney1 = parseInt(innerMoney1.innerText)
  let currentMoney2 = parseInt(innerMoney2.innerText)
  let currentPot = parseInt(innerPot.innerText)
  
  if (currentPlayer === 2) {
 innerMoney1.innerText = currentMoney1 + currentPot
 innerPot.innerText = 0
  }else if(currentPlayer === 1) {
    innerMoney2.innerText = currentMoney2 + currentPot
    innerPot.innerText = 0
  }
}

function tellTurn() {
  let name1 = nameBox1.innerText
  let name2 = nameBox2.innerText
  
  
  nameBox1.style.color = "black"
  nameBox2.style.color = "black"

  
  if(currentPlayer === 1) {
    nameBox1.style.color = "blue"
  } else if(currentPlayer === 2) {
    nameBox2.style.color = "blue"
  }
}