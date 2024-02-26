console.log('ok');

let numberDispari = [];

/* for (let i = 0; i < 6; i++) {
    let numberInput = parseInt(prompt('Inserisci un numero'));

    if (numberInput % 2) {
        numberDispari.push(numberInput);
    }

} */

let i = 0;

while (i < 6) {

    let numberInput = parseInt(prompt('Inserisci un numero'));

    if (numberInput % 2) {
        numberDispari.push(numberInput);
    }

    i++
}


alert(numberDispari);