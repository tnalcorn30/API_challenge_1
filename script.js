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

// Try to play with the HTML stuff
const button = document.querySelector("button")
let t1Span = document.getElementById("type1Span")
let t2Span = document.getElementById("type2Span")
let dexSpan = document.getElementById("dexNumberSpan")
let nSpan = document.getElementById("nameSpan")
let dAbSpan = document.getElementById("defAbilitySpan")
let hAbSpan = document.getElementById("hidAbilitySpan")
//let cImg = document.getElementById("currentImg")


// Fetch the data
function doTheThing() {
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
                },
                image: json.sprites.other['official-artwork']
            }
            // get image
            console.log(pokeObj)
        })
}

// function to update the DOM and show the information retrieved
async function showTheThings() {

}

// The magic button!
button.addEventListener('click', doTheThing, showTheThings)

// Didn't actually get it working, but I tried.