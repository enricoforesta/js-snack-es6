"use strict"
// Array squadre
const squadre = [
    { nome: "Italia", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Francia", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Spagna", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Argentina", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Brasile", puntiFatti: 0, falliSubiti: 0 },
];
console.log(squadre)

// Genera dati casuali
squadre.forEach((squadra) => {
    squadra.puntiFatti = Math.floor(Math.random() * 100) + 1;
    squadra.falliSubiti = Math.floor(Math.random() * 40) + 1;
})

// Nuovo array 
const classificaFalli = squadre.map(({nome, falliSubiti}) => ({nome, falliSubiti}));

console.log(classificaFalli);
