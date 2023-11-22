# Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

# Logica

1. Creo una array di oggetti con le key nome, peso.

2. Creiamo una variabile per la bici più leggera, che dopo il confronto sarà l'oggetto con peso minore e che useremo per stampare a schermo.

3. Usiamo un Ciclo per confrontare il peso delle biciclette, e salviamo ciò che ritorna nella precedente variabile.

4. Destrutturiamo in modo di avere i valori, già salvati in una variabile.

5. Stampo a schermo.


# Snack 2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: 
nome, punti fatti, falli subiti.

Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

# Logica

1. Creo una array di oggetti con le key nome, punti fatti, falli subiti. punti e falli saranno a 0

2. Creo una ciclo che genera numeri casuali, e li aggiunge alle propietà scorrendo all array. 

3. Con la propietà map creiamo un nuovo array solamente con nome e falli subiti.
    Dopo la arrow dobbiamo mettere le () in modo che venga riconosciuto come oggetto.