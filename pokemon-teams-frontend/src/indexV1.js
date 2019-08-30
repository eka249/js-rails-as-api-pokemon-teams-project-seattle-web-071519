const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


document.addEventListener("DOMContentLoaded", main)


function main(e) {
    fetchTrainers()
    fetchPokemons()

}


function fetchTrainers() {
    return fetch("http://localhost:3000/trainers")
    .then(response => response.json())
    .then(json => createCards(json))
}

function fetchPokemons(trainer) {
    return fetch("http://localhost:3000/pokemons")
    .then(response => response.json())
    .then(json => console.log(json))
    }


function createCards(json){
    json.forEach(trainer => {
        let div= document.createElement("div");
        div.className = "card"
        div.setAttribute("data-id", trainer.id)
        let p= document.createElement("p")
        p.innerText= trainer.name
        div.appendChild(p)
        let cards = document.getElementById("cards")
        cards.appendChild(div)
        addTeam(trainer, div)
        //added an id in the HTML to point directly to main
    })
}

function addTeam(trainer, div){
        let ul= document.createElement("ul");
        div.appendChild(ul)
        listTeam(trainer, ul)    
}

function listTeam(trainer, ul) {
    let json= fetchPokemons()
    let team = findTeam(json, trainer)
    console.log(team)
    team.forEach(pokemon => {
        let li= document.createElement("li")
        li.innerText= pokeString(pokemon)

        let releaseButton= document.createElement("button")
        releaseButton.setAttribute("class", "release")
        releaseButton.setAttribute("data-pokemon-id", pokemon.id)
        li.appendChild(releaseButton)

        ul.appendChild(li)
       
    })
}

function findTeam(json, trainer){
    let myPokemon= []
    console.log(json)
    json.forEach(pokemon =>{
        if (pokemon.trainer_id ===trainer.id){
            myPokemon.push(pokemon)
        }
    })
    return myPokemon
}


function pokeString(pokemon){
    return `${pokemon.nickname} (${pokemon.species})`
}


