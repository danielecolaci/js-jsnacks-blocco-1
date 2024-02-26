console.log('ok');

let number = prompt('Inserisci un numero di più cifre');

let somma = 0;

for (let i = 0; i < number.length; i++) {
    let cifre = parseInt(number[i]);
    somma = somma + cifre;
}

alert('La somma delle cifre è ' + somma);