
/*
	🌟 here the superhero details are fetched and shown as the user requests 🌟
*/
// https://akabab.github.io/superhero-api/api

/*
	name 				id 
👉 spider-man			620
👉 iron-man				346
👉 captain america		149
👉 Hulk					332
👉 hawkeye				313
👉 walrus				702
👉 thor 				659
👉 black panther		106
👉 black widow 			107
👉 doctor strange 		226
👉 thanos 				655

*/

// defining the hero name with id object
const heroObj = {
	spiderman: 620,
	ironman: 346,
	captainamerica: 149,
	hulk: 332,
	hawkeye: 313,
	walrus: 702,
	thor: 659,
	blackpanther: 106,
	blackwidow: 107,
	doctorstrange: 226,
	thanos: 655
}

const statToEmojiObj = {
	intelligence: '📚',
	strength: '💪',
	speed: '⚡',
	power: '💥',
	durability: '🎯',
	combat: '🔟'

}

// defining constant variables
const baseURL = `https://akabab.github.io/superhero-api/api/id`
const heroImageDiv = document.querySelector('#image')
const imgBtnRandom = document.querySelector('#imgBtnRandom')
const imgBtnSearch = document.querySelector('#imgBtnSearch')
const keyword = document.querySelector('#superHeroId')


// 				👇👇
// code to get random new hero
//👉 function to get new random number between 1 to 731

const randomId = () => {
	const numberOfHeroes = 731
	return Math.ceil(Math.random() * 731)
}

// 👉 we need to duplicate the h3 tags to show the stats 
// 🌟 Object.keys(<object_name>) 👉 an array of the keys
const showHeroInfo = (character) => {
	const heroImage = `<img src="${character.images['sm']}">`
	const heroName = `<h2>${character.name.toUpperCase()}</h2>`
	const stats = Object.keys(character.powerstats).map(stat => {
		return `<p><b>${statToEmojiObj[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</b></p>`
	}).join('')


	heroImageDiv.innerHTML = `${heroImage}${heroName}${stats}`
}

const getRandomSuperHero = (token) => {
	fetch(`${baseURL}/${token}.json`)
	.then(response => response.json())
	.then(json => {
		showHeroInfo(json)
	})
}
// connecting the button functionality
imgBtnRandom.onclick = () => getRandomSuperHero(randomId())


// 				👇👇
// function for the search button new super hero based on the user input
const getSearchSuperHero = (token) => {
	if (heroObj[token] == undefined) {
		alert('superhero name not available')
	}else {
		fetch(`${baseURL}/${heroObj[token]}.json`)
		.then(response => response.json())
		.then(json => {
			showHeroInfo(json)
		})
	}
}

// adding button functionality
imgBtnSearch.onclick = () => getSearchSuperHero(keyword.value.split(' ').join('').toLowerCase())