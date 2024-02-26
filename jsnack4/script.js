console.log('ok');

let lista = [
    'Daniele',
    'Fabio',
    'Michele',
    'Alessandra',
    'Giovanni',
    'Filippo'
];

let nome = prompt('Inserisci il tuo nome');
let invito = true;

for (let index = 0; index < lista.length; index++) {
    const permesso = lista[index];
    if (permesso == nome) {
        invito = true;
    }
}

if (invito == true) {
    alert('Benvenuto alla festa ' + nome);
} else {
    alert(nome + ' non sei nella lista degli invitati')
}