"use strict"


const numeri = ["livello 1","livello 2","livello 3","livello 4","livello 5","livello 6","livello 7","livello 8","livello 9","livello 10"]

console.log(numeri)


function numeriCompresiFunc(array,numeroMin,numeroMax){
   return array.filter((Elemento, indice) => indice >= numeroMin && indice <= numeroMax);
} 


const numeriCompresi = numeriCompresiFunc(numeri, 3 ,6);
console.log(numeriCompresi)