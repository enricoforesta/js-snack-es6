"use strict"
// Array di oggetti
const biciclette = [
    { nome: "Bici 1", peso: 44 },
    { nome: "Bici 2", peso: 25 },
    { nome: "Bici 3", peso: 14 },
    { nome: "Bici 4", peso: 28 },
    { nome: "Bici 5", peso: 55 },
];
// ciclo per confrontare il peso
let biciLeggera = biciclette[0];

biciclette.forEach((bicicletta) => {
    if (bicicletta.peso < biciLeggera.peso) {
        biciLeggera = bicicletta;
    }
})
const { nome, peso } = biciLeggera
console.log(nome, peso)

// Stampo a schermo 

const risulato = document.querySelector(".pesoMinore").innerText = `La bici con il peso minore è "${nome}" con il peso di "${peso}kg"`
