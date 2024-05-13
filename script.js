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
const bettingBox = document.querySelector("#bettingBox")
const highNumber = document.querySelector("#highNumber")
const passLine = document.querySelector("#passLine")
//make consts for bet buttons
const bet10 = document.querySelector("#bet10")
const bet20 = document.querySelector("#bet20")
const bet30 = document.querySelector("#bet30")
//add a const for the inner Pot value
const innerPot = document.querySelector("#innerPot")
const diceImages = [
  "1dice.gif", // side 1
  "2sidedice.jpeg", // side 2
  "3sidedice.gif", // side 3
  "4sidedice.gif", // side 4
  "5sidedice.jpeg", // side 5
  "6sidedice.gif"  // side 6
]
//////V[ARIABLES//////////////
let rollOccurred = false


//////FUNCTIONS//////////////

//function that creates a random number between 1-6
function rollDice() {
num = Math.floor(Math.random() * 6) + 1;
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


///////EVENT LISTENERS///////

rollButton.addEventListener('click', () => {
   if(!rollOccurred) {
  
  let dice2Outcome = rollDice()
   let dice1Outcome = rollDice()
   dice1.src = diceImages[dice1Outcome - 1]
   dice2.src = diceImages[dice2Outcome - 1]
   
   diceImage1.src = diceImages[dice1Outcome - 1]  // dice1Outcome - 1 because array indices start from 0
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

bettingBox.style.display = "none"
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

let clickCount = 0

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
  }else{
    alert("Not enough money to bet $20 for both players!")
  }
  }
)

//make a funtion to award whichever player that wins the money in the pot

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
//recreate this function for 20 and 30

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
    }else{
      alert("Not enough money to bet $30 for both players!")
    }
    }
  )

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
//RULES:
//You win if you roll a 7 or 11 on first roll
//You lose if you roll a 2, 3, or 12
//Any other number becomes the "point" and you must roll that number again before rolling a 7

//when i make the event listener i can make a value change on the html so that i can use it in an IF statement and determine which rules to follow
//first decide what code i will need to use in both and either leave it outside the highnumber event listener or copy and
