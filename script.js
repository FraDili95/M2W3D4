// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella


//ex 7
const titolo = document.querySelector("#title");
function changeColour(x) {
    x.style.color = "red";
}
changeColour(titolo);

//ex8
const back = document.querySelector("body");
console.log(back);
function changeBackColor(params) {
    params.style.backgroundColor = "green";
}
changeBackColor(back);

//ex9
const address = document.querySelector("form");
function replaceAddress(address) {//funzione per sostituire l'indirizzo
 address.firstElementChild.textContent = "Via delle filatrici 11";  //modifico il contenuto del testo del primo figlio   
}
replaceAddress(address);

//ex10
const addressTwo = document.getElementsByTagName("a");
function addClassToA( tag ) {
    for ( let i = 0; i < tag.length; i++ ){
        tag[i].classList.add("new_class");//aggiunge la classe
    }
}
addClassToA(addressTwo);
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS
// a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

const immagini = document.getElementsByTagName("img");//puntatore a tutti elementi img
const button = document.querySelector(".pulsante_poof");//puntatore a tutti elementi con classe pulsante_poof

function addClassToImg( tag ) {//aggiunge/toglie una classe ad ogni elemento dello speudoarray di img puntati 
   
    for ( let i = 0; i < tag.length; i++ ){

        if( tag[i].classList.contains("poof") ){//se c'è
            tag[i].classList.remove("poof")//la toglie
        }else{//sennò
            tag[i].classList.add("poof");//la aggiunge
        } 
    }

}

function desaparesito(immagini) {

    addClassToImg(immagini);//aggiunge/toglie classe
    for ( let i = 0; i < immagini.length; i++ ){
        if( immagini[i].classList.contains("poof")){//se ha la classe
            immagini[i].style.display = "none";//scompare
        }else{//sennò
            immagini[i].style.display = "block";//compare
        }
    }
   
}

button.addEventListener ("click", function() {//ogni click corrisponde
    desaparesito(immagini);// una chiamata a desaparesito che chiama a sua volta addclasstoimg ogni volta
});

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

let parent = document.getElementsByTagName("tr");//puntatore ad ogni riga della tabella
const parentSelection = [];//array costante vuoto
for (let i = 1; i < parent.length; i++) {
    parentSelection.push(parent[i]);  //pusho all'array vuoto l'indirizzo alle righe che mi servono(tutte tranne la prima)
}
function colorRandom() {//funzione generatrice di colori a caso
    const MIN = 0; const MAX = 255;//estremi
    return Math.floor( Math.random() * ( MAX - MIN + 1) ) +  MIN ;//ritorna a caso tra min e max
}
function pricesColorChange( ){//funzione che applica agli ultimi figli di ogni riga della tabella un rgb a caso
    for (let i = 0; i < parentSelection.length; i++) {//per ogni last child
        parentSelection[i].lastElementChild.style.color =  `rgb( ${ colorRandom() }, ${ colorRandom() }, ${ colorRandom() } )`; //applico 3 volte la funzione
    }                                                     //uso `` per applicare la funzione all'interno del valore di rgb che altrimenti non prenderebbe
}
const buttonTwo = document.querySelector("#change_color");//punto il bottone
buttonTwo.addEventListener( "click", pricesColorChange );

   



