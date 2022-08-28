

const complexity = document.querySelectorAll('.complexity');
const complexityContainer = document.querySelector('.complexity-container');
const countingContainer = document.querySelector('.counting-container');
const fg = document.querySelector('.first-green');
const fb = document.querySelector('.first-brown');
const fbl = document.querySelector('.first-blue');
const sg = document.querySelector('.second-green');
const sb = document.querySelector('.second-brown');
const sbl = document.querySelector('.second-blue');
const distribution = document.querySelector('.distribution');
const new__map = document.querySelector('.new__map');




const shuffleDeck = (giga) => {

	const first = stagesCreate(giga.firstStage, bigDick);
	const second = stagesCreate(giga.secondStage, bigDick);
	const third = stagesCreate(giga.thirdStage, bigDick);

	return [first, second, third];
};


distribution.addEventListener('click', () => {

	let popCard;
	if (!femalePussy[0].every(val => val.length === 0)) {
		while (!popCard) {
			popCard = deleteCard(femalePussy[0]);
		}
		new__map.style.background = `url(${popCard.cardFace})`;
		new__map.style.backgroundSize = "contain";
		new__map.style.backgroundRepeat = "no-repeat";
		rewrite(femalePussy);
	} else if (!femalePussy[1].every(val => val.length === 0)) {
		while (!popCard) {
			popCard = deleteCard(femalePussy[1]);
		}
		new__map.style.background = `url(${popCard.cardFace})`;
		new__map.style.backgroundSize = "contain";
		new__map.style.backgroundRepeat = "no-repeat";
		rewrite(femalePussy);
	} else if (!femalePussy[2].every(val => val.length === 0)) {
		while (!popCard) {
			popCard = deleteCard(femalePussy[2]);
		}
		new__map.style.background = `url(${popCard.cardFace})`;
		new__map.style.backgroundSize = "contain";
		new__map.style.backgroundRepeat = "no-repeat";
		rewrite(femalePussy);
	}
});

let femalePussy = [];
const deleteCard = (deckArray) => {
	if (deckArray) {
		let randNumb = Math.floor(Math.random() * 3);
		return deckArray[randNumb].pop();
	}
};

complexity.forEach(elem => {
	elem.addEventListener('click', (event) => {
		distribution.classList.remove('deck-active');
		new__map.style.background = 'none';
		countingContainer.classList.remove('track-active');
		complexity.forEach(item => {
			if (!event.target.classList.contains('shuffle-button')) {
				item.classList.remove('difficulty-active');
			}
		});
		if (event.target.classList.contains('veryeasy-button')) {
			bigDick = buildDeckfromDifficulty(Blue, Brown, Green, 'veryeasy');
			complexity[complexity.length - 1].classList.add('shuffle-active');
			elem.classList.add('difficulty-active');
		} else if (event.target.classList.contains('easy-button')) {
			bigDick = shuffle(buildDeckfromDifficulty(Blue, Brown, Green, 'easy'));
			complexity[complexity.length - 1].classList.add('shuffle-active');
			elem.classList.add('difficulty-active');
		} else if (event.target.classList.contains('normal-button')) {
			bigDick = shuffle(buildDeckfromDifficulty(Blue, Brown, Green, 'normal'));
			complexity[complexity.length - 1].classList.add('shuffle-active');
			elem.classList.add('difficulty-active');
		} else if (event.target.classList.contains('hard-button')) {
			bigDick = shuffle(buildDeckfromDifficulty(Blue, Brown, Green, 'hard'));
			complexity[complexity.length - 1].classList.add('shuffle-active');
			elem.classList.add('difficulty-active');
		} else if (event.target.classList.contains('veryhard-button')) {
			bigDick = buildDeckfromDifficulty(Blue, Brown, Green, 'veryhard');
			complexity[complexity.length - 1].classList.add('shuffle-active');
			elem.classList.add('difficulty-active');
		} else if (event.target.classList.contains('shuffle-button')) {
			femalePussy = shuffleDeck(sampleСard);
			rewrite(femalePussy);
			distribution.classList.add('deck-active');
			countingContainer.classList.add('track-active');
			complexity[complexity.length - 1].classList.remove('shuffle-active');
		}
	});
});

let bigDick = [];
const azathothImage = document.querySelector('.Azathoth');
const cthulthuImage = document.querySelector('.Cthulthu');
const iogSothothImage = document.querySelector('.IogSothoth');
const shubNiggurathImage = document.querySelector('.ShubNiggurath');
azathothImage.addEventListener('click', () => {
	cthulthuImage.classList.remove('active-ancient');
	iogSothothImage.classList.remove('active-ancient');
	shubNiggurathImage.classList.remove('acive-ancient');
	azathothImage.classList.add('active-ancient');
	complexityContainer.style.opacity = '1';
	sampleСard = Ancients.ancientsData[0];
	distribution.classList.remove('deck-active');
	new__map.style.background = 'none';
	countingContainer.classList.remove('track-active');
	complexity.forEach(elem => {
		elem.classList.remove('difficulty-active');
	});
});

const buildDeckfromDifficulty = (Blue, Brown, Green, difficulty) => {
	let fullDeck = [...Blue.cardsData, ...Brown.cardsData, ...Green.cardsData];
	let easyCards = [];
	let normalCards = [];
	let hardCards = [];
	fullDeck.forEach(elem => {
		if (elem.difficulty === 'easy') {
			easyCards.push(elem);
		} else if (elem.difficulty === 'normal') {
			normalCards.push(elem);
		} else {
			hardCards.push(elem);
		}
	});
	switch (difficulty) {
		case 'veryeasy': {
			return [...shuffle(easyCards), ...shuffle(normalCards)];
		}
		case 'easy': {
			return [...shuffle(easyCards), ...shuffle(normalCards)];
		}
		case 'normal': {
			return [...shuffle(easyCards), ...shuffle(normalCards), ...shuffle(hardCards)];
		}
		case 'hard': {
			return [...shuffle(normalCards), ...shuffle(hardCards)];
		}
		case 'veryhard': {
			return [...shuffle(hardCards), ...shuffle(normalCards)];
		}
	}
};
cthulthuImage.addEventListener('click', () => {
	iogSothothImage.classList.remove('active-ancient');
	shubNiggurathImage.classList.remove('active-ancient');
	azathothImage.classList.remove('active-ancient');
	cthulthuImage.classList.add('active-ancient');
	complexityContainer.style.opacity = '1';
	sampleСard = Ancients.ancientsData[1];
	distribution.classList.remove('deck-active');
	new__map.style.background = 'none';
	countingContainer.classList.remove('track-active');
	complexity.forEach(elem => {
		elem.classList.remove('difficulty-active');
	});
});

const stagesCreate = (stage, deck) => {

	let greenCards = [];
	let brownCards = [];
	let blueCards = [];

	for (const key in stage) {
		for (let i = 0; i < stage[key]; i++) {
			if (key === 'greenCards') {
				const index = bigDick.findIndex(value => value.color === 'green');
				greenCards.push(...bigDick.splice(index, 1));
			} else if (key === 'brownCards') {
				const index = bigDick.findIndex(value => value.color === 'brown');
				brownCards.push(...bigDick.splice(index, 1));
			} else if (key === 'blueCards') {
				const index = bigDick.findIndex(value => value.color === 'blue');
				blueCards.push(...bigDick.splice(index, 1));
			}
		}
	}
	return [shuffle(greenCards), shuffle(brownCards), shuffle(blueCards)];

};
let sampleСard = {};
iogSothothImage.addEventListener('click', () => {
	cthulthuImage.classList.remove('active-ancient');
	shubNiggurathImage.classList.remove('active-ancient');
	azathothImage.classList.remove('active-ancient');
	iogSothothImage.classList.add('active-ancient');
	complexityContainer.style.opacity = '1';
	sampleСard = Ancients.ancientsData[2];
	distribution.classList.remove('deck-active');
	new__map.style.background = 'none';
	countingContainer.classList.remove('track-active');
	complexity.forEach(elem => {
		elem.classList.remove('difficulty-active');
	});
});
function shuffle(array) {
	let currentIndex = array.length, randomIndex;

	while (currentIndex != 0) {

		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
	}

	return array;
}
const tb = document.querySelector('.third-brown');
const tg = document.querySelector('.third-green');
const tbl = document.querySelector('.third-blue');

shubNiggurathImage.addEventListener('click', () => {
	cthulthuImage.classList.remove('active-ancient');
	iogSothothImage.classList.remove('active-ancient');
	azathothImage.classList.remove('active-ancient');
	shubNiggurathImage.classList.add('active-ancient');
	complexityContainer.style.opacity = '1';
	sampleСard = Ancients.ancientsData[3];
	distribution.classList.remove('deck-active');
	new__map.style.background = 'none';
	countingContainer.classList.remove('track-active');
	complexity.forEach(elem => {
		elem.classList.remove('difficulty-active');
	});
});

const rewrite = (array) => {

	fg.textContent = array[0][0].length;
	fb.textContent = array[0][1].length;
	fbl.textContent = array[0][2].length;

	sg.textContent = array[1][0].length;
	sb.textContent = array[1][1].length;
	sbl.textContent = array[1][2].length;

	tg.textContent = array[2][0].length;
	tb.textContent = array[2][1].length;
	tbl.textContent = array[2][2].length;
};

import * as Ancients from "../codeJam/data/ancients.js"
import * as Blue from "../codeJam/data/mythicCards/blue/index.js"
import * as Brown from "../codeJam/data/mythicCards/brown/index.js";
import * as Green from "../codeJam/data/mythicCards/green/index.js";
