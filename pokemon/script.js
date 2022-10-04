const poke_container = document.querySelector('#poke-container');
const gen1 = document.querySelector('#gen1');
const gen2 = document.querySelector('#gen2');
const gen3 = document.querySelector('#gen3');
const gen4 = document.querySelector('#gen4');
const gen5 = document.querySelector('#gen5');
const gen6 = document.querySelector('#gen6');
const gen7 = document.querySelector('#gen7');
const gen8 = document.querySelector('#gen8');
const tabs = document.querySelector('li');
let active = 0;
const gen1Count = 151;

// Test

let count;


const fetchGen1Pokemons = async () => {
    for (let i = 0; i < count; i++) {
        await getPokemon(i);
    }
};


const getPokemon = async (id) => {

    const urls = [
        `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`,
        `https://pokeapi.co/api/v2/pokemon/${id}`,
    ];
    Promise.all(urls.map(url =>
        fetch(url)
            .then(response => response.json())
            .catch(error => console.log('There was a problem!', error))
    ))
        .then(data => {
            const countData = data[0];
            const globalData = data[1];

            console.log(globalData);
            console.log(countData.results.length);
            count = +countData.results.length;
            console.log(typeof (count));

            createPokemonCard(globalData);
            // createPokemonCard(countData);

        });

    // const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    // const res = await fetch(url);
    // const data = await res.json();
    // console.log(data);

};


const createPokemonCard = (pokemon) => {
    const pokemonElements = document.createElement('div');
    pokemonElements.classList.add('pokemon');

    const name = pokemon.name.toUpperCase();
    const pokeType = pokemon.types[0].type.name;
    console.log(pokeType);

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src=${pokemon.sprites.front_default} alt="${pokemon.sprites.other["official-artwork"].front_default}"/>
        </div>
        <div class="info">
        <span class="number">${pokemon.id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${pokeType}</span></small>
        </div>
    `;

    pokemonElements.innerHTML = pokemonInnerHTML;

    poke_container.appendChild(pokemonElements);
};

const createPokemonGeneration = (generation) => {

};

gen1.addEventListener('click', fetchGen1Pokemons);
