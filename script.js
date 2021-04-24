const baseURL = "https://pokeapi.co/api/v2/pokemon"

// Generate a random Hoenn Pokemon's Pokedex number
// found this solution at:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomNum(min, max) {
    min = Math.ceil(252);
    max = Math.floor(387);
    return Math.floor(Math.random() * (387 - 252) + 252); //The maximum is exclusive and the minimum is inclusive
}

// Set and check the url
let pocketMonster = (baseURL + "/" + randomNum())
console.log(pocketMonster)

// Fetch the data
function doTheThing(){
    fetch(pocketMonster)
    .then(res => {
        console.log(res)
        return res.json()
    })
    .then(json => {
        console.log(json)
        // create a container for the data I'm after
        let pokeObj = {
            number: json.id,
            name: json.name,
            abilities: {
                default: json.abilities[0],
                hidden: json.abilities[1]
            },
            // gotta account for that second type not always being applicable at some point
            elementalType: {
                type1: json.types[0],
                type2: json.types[1]
            }
        }
        // get image
        let pImg = json.sprites.other['official-artwork']
        console.log(pokeObj)
    })
}

// function to display what the thing did, obviously not done
async function showTheThings(){
    let cardGroup = document.createElement(cardGroup);
}

// Try to play with the HTML stuffs

// The magic button!
const button = document.querySelector('button')
button.addEventListener('click', doTheThing, showTheThings)