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

    .then(function(trainers) {
        //creating cards below
        trainers.forEach(trainer => {
            // console.log(json)
        
            let div= document.createElement("div");
            div.className = "card"
            div.setAttribute("data-id", trainer.id)

            let p= document.createElement("p")
            p.innerText= trainer.name
            div.appendChild(p)
            
            let addButton = document.createElement("button")
            addButton.setAttribute("data-trainer-id", trainer.id)
            addButton.textContent = "Add Pokemon"
            div.appendChild(addButton)
            
            let ul= document.createElement("ul")
            ul.setAttribute("id", trainer.id)
            div.appendChild(ul)


            let cards = document.getElementById("cards")
            cards.appendChild(div)
            // addTeam(trainer, div)
            //added an id in the HTML to point directly to main

        })
    })
}

function fetchPokemons() {
    return fetch("http://localhost:3000/pokemons")
    .then(response => response.json())
    .then(function(pokemons) {
        // console.log(cards)
        // let tempfred= document.getElementsByTagName("trainer-list-id")
        // console.log(pokemons[4])


        pokemons.forEach(pokemon => {

            let uls= document.getElementsByTagName("ul")
            console.log(uls[8])
            console.log(uls[9])

            let i = 0
            while (uls[i] != undefined){
                if (uls[i].id == pokemon.trainer_id){
                    let ul = uls[i]
                    console.log(ul)
                    let li= document.createElement("li")
                    li.innerText = pokeString(pokemon)

                    let releaseButton = document.createElement("button")
                    releaseButton.setAttribute("class", "release")
                    releaseButton.setAttribute("data-pokemon-id", pokemon.id)
                    releaseButton.textContent = "Release"
                    li.appendChild(releaseButton)

                    ul.appendChild(li)
                }
                
                i++
            }
        
        })
        
    })
}
    
function pokeString(pokemon){
    return `${pokemon.nickname} (${pokemon.species})`
}




function addPokemon(trainer){
    return fetch("http://localhost:3000/pokemons")
    .then(response => response.json())
    .then(function(pokemons) {
        // console.log(cards)
        // let tempfred= document.getElementsByTagName("trainer-list-id")
        // console.log(pokemons[4])
        let randomNumber = Math.floor(Math.random()*pokemons.length)
        let pokemon = pokemons[randomNumber]


        let uls= document.getElementsByTagName("ul")
        console.log(uls[8])
        console.log(uls[9])

        let i = 0
        while (uls[i] != undefined){
            if (uls[i].id == pokemon.trainer_id){
                let ul = uls[i]
                console.log(ul)
                let li= document.createElement("li")
                li.innerText = pokeString(pokemon)

                let releaseButton = document.createElement("button")
                releaseButton.setAttribute("class", "release")
                releaseButton.setAttribute("data-pokemon-id", pokemon.id)
                releaseButton.textContent = "Release"
                li.appendChild(releaseButton)

                ul.appendChild(li)
            }
            
            i++
        }
    
    
        
    })
}