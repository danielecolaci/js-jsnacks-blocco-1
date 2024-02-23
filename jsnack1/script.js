//Variabili due numeri
let numberOne = prompt('Inserisci il primo numero');
let numberTwo = prompt('Inserisci il secondo numero');

console.log(numberOne);
console.log(numberTwo);

if (numberOne > numberTwo) {
    alert('Il numero più grande è il primo');
}
else if (numberTwo > numberOne) {
    alert('Il numero più grande è il secondo');
}
else {
    alert('I numeri sono uguali');
}