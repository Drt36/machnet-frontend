/*
Create an array of pokemon trainers that has only 2 pokemons and has a pokemon with yellow color
 */
const details = [
    {
        name: 'Ram',
        pokemons: [
            {
                name: 'pikachu',
                color: 'yellow',
            },
            {
                name: 'charmendar',
                color: 'red',
            },
        ],
    },
    {
        name: 'Shyam',
        pokemons: [
            {
                name: 'Squirtel',
                color: 'blue',
            },
            {
                name: 'charmendar',
                color: 'red',
            },
            {
                name: 'bulbasaur',
                color: 'green',
            },
        ],
    },
    {
        name: 'hari',
        pokemons: [
            {
                name: 'bulbasaur',
                color: 'green',
            },
            {
                name: 'pikachu',
                color: 'yellow',
            },
        ],
    },
    {
        name: 'gita',
        pokemons: [
            {
                name: 'bulbasaur',
                color: 'green',
            },
            {
                name: 'squirtle',
                color: 'blue',
            },
        ],
    },
];


let output = details.filter(item => {

    let isYellow = item.pokemons.find(pokemon => pokemon.color == 'yellow')
    let length = item.pokemons.length

    return length == 2 && isYellow;
}
);


console.log(output)