let wordOne = prompt('Inserisci la prima parola');
let wordTwo = prompt('Inserisci la seconda parola');

console.log(wordOne);
console.log(wordTwo);

if (wordOne.length < wordTwo.length) {
    alert(wordOne + ' < ' + wordTwo)
}
else if (wordTwo.length < wordOne.length) {
    alert(wordTwo + ' < ' + wordOne)
}
else {
    alert(wordOne + ' = ' + wordTwo)
}