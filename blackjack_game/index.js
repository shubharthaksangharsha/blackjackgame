let cards  = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let resetEl = document.getElementById("reset-btn")
//object
let player = {
    name:  "Shubharthak",
    chips:  145
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips
function getRandom(){
    let randomNumber =  Math.floor(Math.random() * 13 ) + 1
    if(randomNumber > 10){
	return 10
    }
    else if(randomNumber === 1){
	return 11
    }
    else {
	return randomNumber
    }
}
function startGame(){
    isAlive = true
    let firstCard = getRandom()
    let secondCard = getRandom()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length ; i++){
	
	cardsEl.textContent += " " +  cards[i]
    }
    
    if(sum <= 20){
	message = "Do you want to draw a new card?"
    }

    else if(sum === 21){
	message = "You've got Blackjack!"
	hasBlackJack = true
    }
    else{
	message = "You're out of the game!"
	isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive == true && hasBlackJack == false){
	messageEl.textContent = "Drawing a new card from the deck!"
	let card = getRandom()
	sum += card
	cards.push(card)
	renderGame()
    }
    else{
	messageEl.textContent = "Sorry! You can't draw the new card!"
    }
}

function resetCard(){
    let hasBlackJack = false
    let isAlive = false
    messageEl.textContent = "Want to play a round?"
    sumEl.textContent = "Sum: "
    cardsEl.textContent = "Cards: "
}
