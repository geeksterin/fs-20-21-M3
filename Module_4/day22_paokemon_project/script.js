let pokemonContainer = document.querySelector("#pokemon_card_container");
let searchInput = document.getElementById("search");
let filterBtn = document.getElementById("filter");
let type = document.getElementById("type");

async function fetchPokemOnData(i) {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let result = await data.json();
    return result;
  }

function createCard(pokemon){
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <div class="card-inner">
    <div class="card-front">
    <div class="id">${pokemon.id}</div>
    <img src='${pokemon.sprites.front_default}'/>
    <div class="name">${pokemon.name}</div>
    <div class="type">${pokemon.types[0].type.name}</div>
    </div>

    <div class="back-card">
    <img src='${pokemon.sprites.back_default}'/>
     <div class="name">${pokemon.name}</div>
     <div class="type">${pokemon.abilities[0].ability.name}</div>
     </div>
     </div>
    `;
    // console.log(card);
    return card;
}

filterBtn.addEventListener("click", function(){
    let allCards = document.querySelectorAll(".card");
    allCards.forEach((card)=>{
        let cardType = card.querySelector(".type").textContent;
        // console.log(cardType);
        console.log(type.value);
        
        if(cardType === type.value){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        } 
    })
})


searchInput.addEventListener('keyup', function(){
    let searchValue = searchInput.value;
    console.log(searchValue);
    let allCards = document.querySelectorAll(".card");
    allCards.forEach(function(card){
        let cardName = card.querySelector(".name").textContent;
        // console.log(cardName);

        if(cardName.startsWith(searchValue)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    }) 
})

async function fetchNPokemons() {
    for (let i = 1; i <= 100; i++) {
      let pokemon = await fetchPokemOnData(i);
      console.log(pokemon);
      let shivam = createCard(pokemon);
      pokemonContainer.appendChild(shivam);
    }
}

fetchNPokemons();
