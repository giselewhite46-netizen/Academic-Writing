
document.addEventListener('DOMContentLoaded',() => {
const cardArray = [
	
	{	name: 'card_1', 	img: 'IMG_2/card_1.png', audio:  'AUD_VEG/aud_1.wav'	},
	{	name: 'card_2', 	img: 'IMG_2/card_2.png', audio:  'AUD_VEG/aud_2.wav'	},
	{	name: 'card_3', 	img: 'IMG_2/card_3.png', audio:  'AUD_VEG/aud_3.wav'	},
	{	name: 'card_4', 	img: 'IMG_2/card_4.png', audio:  'AUD_VEG/aud_4.wav'	},
	{	name: 'card_5', 	img: 'IMG_2/card_5.png', audio:  'AUD_VEG/aud_5.wav'	},
	{	name: 'card_6', 	img: 'IMG_2/card_6.png', audio:  'AUD_VEG/aud_6.wav'	},
	{	name: 'card_7', 	img: 'IMG_2/card_7.png', audio:  'AUD_VEG/aud_7.wav'	},
	{	name: 'card_8', 	img: 'IMG_2/card_8.png', audio:  'AUD_VEG/aud_8.wav'	},
	{	name: 'card_9', 	img: 'IMG_2/card_9.png', audio:  'AUD_VEG/aud_9.wav'	},
	{	name: 'card_10', 	img: 'IMG_2/card_10.png', audio:  'AUD_VEG/aud_10.wav'	},
	{	name: 'card_11', 	img: 'IMG_2/card_11.png', audio:  'AUD_VEG/aud_11.wav'	},
	{	name: 'card_12', 	img: 'IMG_2/card_12.png', audio:  'AUD_VEG/aud_12.wav'	},
	{	name: 'card_13', 	img: 'IMG_2/card_13.png', audio:  'AUD_VEG/aud_13.wav'	},
	{	name: 'card_14', 	img: 'IMG_2/card_14.png', audio:  'AUD_VEG/aud_14.wav'	},
	{	name: 'card_15', 	img: 'IMG_2/card_15.png', audio:  'AUD_VEG/aud_15.wav'	},

	{	name: 'card_1', 	img: 'IMG_2/match_1.png', audio:  'AUD_VEG/aud_1.wav'	},
	{	name: 'card_2', 	img: 'IMG_2/match_2.png', audio:  'AUD_VEG/aud_2.wav'	},
	{	name: 'card_3', 	img: 'IMG_2/match_3.png', audio:  'AUD_VEG/aud_3.wav'	},
	{	name: 'card_4', 	img: 'IMG_2/match_4.png', audio:  'AUD_VEG/aud_4.wav'	},
	{	name: 'card_5', 	img: 'IMG_2/match_5.png', audio:  'AUD_VEG/aud_5.wav'	},
	{	name: 'card_6', 	img: 'IMG_2/match_6.png', audio:  'AUD_VEG/aud_6.wav'	},
	{	name: 'card_7', 	img: 'IMG_2/match_7.png', audio:  'AUD_VEG/aud_7.wav'	},
	{	name: 'card_8', 	img: 'IMG_2/match_8.png', audio:  'AUD_VEG/aud_8.wav'	},
	{	name: 'card_9', 	img: 'IMG_2/match_9.png', audio:  'AUD_VEG/aud_9.wav'	},
	{	name: 'card_10', 	img: 'IMG_2/match_10.png', audio:  'AUD_VEG/aud_10.wav'	},
	{	name: 'card_11', 	img: 'IMG_2/match_11.png', audio:  'AUD_VEG/aud_11.wav'	},
	{	name: 'card_12', 	img: 'IMG_2/match_12.png', audio:  'AUD_VEG/aud_12.wav'	},
	{	name: 'card_13', 	img: 'IMG_2/match_13.png', audio:  'AUD_VEG/aud_13.wav'	},
	{	name: 'card_14', 	img: 'IMG_2/match_14.png', audio:  'AUD_VEG/aud_14.wav'	},
	{	name: 'card_15', 	img: 'IMG_2/match_15.png', audio:  'AUD_VEG/aud_15.wav'	},
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []


function createBoard(){

	for (let i=0; i < cardArray.length; i++)
	{
		var card = document.createElement('img')
		card.setAttribute('src', 'IMG_2/cardBack.png')
		card.setAttribute('data-id', i)
		card.addEventListener('click', flipCard)
		grid.appendChild(card)
	}
}
createBoard()

function checkForMatch(){

	var cards = document.querySelectorAll('img')
	const optionOneId = cardsChosenId[0]
	const optionTwoId = cardsChosen[1]

	if(cardsChosen[0] === cardsChosen [1]){

		alert ('You found a match')
		//cards[optionOneId].setAttribute('src', "images")

	}else{

		cards[optionOneId].setAttribute('src', 'images/blank.png')
		cards[optionTwoId].setAttribute('src', 'images/blank.png')
		alert ('Sorry, try again')

	}
	cardsChosen = []
	cardsChosenId = []
	resultDisplay.textContent = cardsWon.length
	if (cardsWon.length === cardsArray.length/2){

		resultDisplay.textContent = 'Congratulations! You found them all!'

	}

}

function flipCard(){

	var cardId = this.getAttribute('data-id')
	cardsChosen.push(cardArray[cardId].name)
	cardsChosenId.push(cardId)
	this.setAttribute('src', cardArray[cardId].img)
	if (cardsChosen.length ==2){
		
		setTimeout(checkForMatch, 500)

	}
}





})





