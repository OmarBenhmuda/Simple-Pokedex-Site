let pokeNumber = ["001", "002", "003", "004", "005", "006", "007", "008", "009",
    "010", "011", "012", "013", "014", "015", "016", "017", "018", "019", "020"];
let pokeNames = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle",
    "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot",
    "Rattata", "Raticate"];
let pokeType1 = ["Grass", "Grass", "Grass", "Fire", "Fire", "Fire", "Water", "Water", "Water", "Bug", "Bug", "Bug",
    "Bug", "Bug", "Bug", "Normal", "Normal", "Normal", "Normal", "Normal"];
let pokeType2 = ["Poison", "Poison", "Poison", null, null, "Flying", null, null, null, null, null, "Flying", "Poison",
    "Poison", "Poison", "Flying", "Flying", "Flying", null, null];
let baseHP = [45, 60, 80, 39, 58, 78, 44, 59, 79, 45, 50, 60, 40, 45, 65, 40, 63, 83, 30, 55
]
let baseATK = [49, 62, 82, 52, 64, 84, 48, 63, 83, 30, 20, 45, 35, 25, 90, 45, 60, 80, 56, 81
];
let baseDEF = [49, 63, 83, 43, 58, 78, 65, 80, 100, 35, 55, 50, 30, 50, 40, 40, 55, 75, 35, 60
];
let baseSpATK = [65, 80, 100, 60, 80, 109, 50, 65, 85, 20, 25, 90, 20, 25, 45, 35, 50, 70, 25, 50
];
let baseSpDEF = [65, 80, 100, 50, 65, 85, 64, 80, 105, 20, 25, 80, 20, 25, 80, 35, 50, 70, 35, 70
];
let baseSPD = [45, 60, 80, 65, 80, 100, 43, 58, 78, 45, 30, 70, 50, 35, 75, 56, 71, 101, 72, 77
];


const divElement = document.createElement("div");
const ul = document.createElement("ul");
ul.classList.add("container");


for (let i = 0; i < pokeNumber.length; i++) {

    const pokemon = document.createElement("li");
    pokemon.classList.add("content");

    const pokeImg = document.createElement("img");
    pokeImg.classList.add("pokemonIMG");
    pokeImg.src = "images/" + (i + 1).toString() + ".png";

    const pokemonHeader = document.createElement("h2");
    pokemonHeader.textContent = "#" + pokeNumber[i] + " " + pokeNames[i];

    const pokemonType = document.createElement("h3");
    if (pokeType2[i] == null) {
        pokemonType.textContent = pokeType1[i];
    } else {
        pokemonType.textContent = pokeType1[i] + " and " + pokeType2[i]
    }

    const statsHeader = document.createElement("h3");
    statsHeader.textContent = "STATS";

    const stats = document.createElement("p");
    stats.textContent =
        "Base HP: " + baseHP[i] + "\n" +
        "Base ATK: " + baseATK[i] + "\n" +
        "Base DEF: " + baseDEF[i] + "\n" +
        "Base Sp. ATK: " + baseSpATK[i] + "\n" +
        "Base Sp, DEF: " + baseSpDEF[i] + "\n" +
        "Base SPD: " + baseSPD[i] + "\n";
    stats.innerHTML = stats.innerHTML.replace(/\n\r?/g, '<br />');


    pokemon.appendChild(pokemonHeader);
    pokemon.appendChild(pokemonType);
    pokemon.appendChild(statsHeader);
    pokemon.appendChild(stats);
    pokemon.appendChild(pokeImg);

    ul.appendChild(pokemon);


}

divElement.appendChild(ul);
document.body.appendChild(divElement);









