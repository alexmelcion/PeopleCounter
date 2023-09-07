function getRandomCard() {
    let numRan = Math.floor( Math.random()*13 ) + 1
    if (numRan === 1){
        numRan = 11
    }
    else if (11 <= numRan){
        numRan = 10
    }
    return numRan
}

let firstCard
let secondCard
let cards = []
let sum = 0
let hasBlackJack=false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name : "Alex",
    chips : 0
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    hasBlackJack=false
    renderGame()
}

function renderGame(){
    cardsEl.textContent="Cards: "+ firstCard
    for (let i = 1; i < cards.length ; i++) {
        cardsEl.textContent += " - " + cards[i]
    }
    sumEl.textContent="Sum: "+sum
    if (sum <= 20){
        message = "Do you wnat to draw a new card?"
    }
    else if (sum===21){
        message = "Wohoo! You've got Blackjack and 50 bucks plus!"
        hasBlackJack=true
        player.chips += 50
        playerEl.textContent = player.name + ": $" + player.chips
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}