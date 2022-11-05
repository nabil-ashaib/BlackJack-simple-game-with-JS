let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")


// Start The Game
function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// Render The Game
function renderGame() {
    // Message
    if(sum <= 20) {
        message = "Do you want to draw a new card ?"
    }
    else if(sum === 21) {
        message = "You've got BlackJack :)"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game :("
        isAlive = false
    }
    messageEl.textContent = message
    // Cards
    cardsEl.textContent = "Cards : "
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum : " + sum
}

// Ask for a New Card
function newCard() {
    if (isAlive === true&& hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        
        renderGame()
    }
    else {}
}

// Get a Random Card Number
function getRandomCard() {
    let randomNumber =  Math.floor( (Math.random()*13) ) + 1
    if (randomNumber === 1) {
        return 11
    }
    else if (randomNumber > 10) {
        return 10
    }
    else {
        return randomNumber
    }
}

// Player Name and Chips
let player = {
    name: "Nabil",
    chips: 139
}
playerEl.textContent = player.name + " : $" + player.chips