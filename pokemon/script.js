const poke_container = document.querySelector('#poke-container');
const pokemon_count = 50;

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }
};

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/version/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
    const pokemonElements = document.createElement('div');
    pokemonElements.classList.add('pokemon');

    const name = pokemon.name.toUpperCase();
    const pokeType = pokemon.types[0].type.name;
    console.log(pokeType);

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt=""/>
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

fetchPokemons();
