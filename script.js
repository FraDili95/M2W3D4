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
function replaceAddress(address) {
 address.firstElementChild.textContent = "Via delle filatrici 11";    
}
replaceAddress(address);
//ex10
const addressTwo = document.getElementsByTagName("a");
function addClassToA( tag ) {
    for ( let i = 0; i < tag.length; i++ ){
        tag[i].classList.add("new_class");
    }
}
addClassToA(addressTwo);
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS
// a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

const immagini = document.getElementsByTagName("img");
const button = document.querySelector(".pulsante_poof");

function addClassToImg( tag ) {
   
    for ( let i = 0; i < tag.length; i++ ){
        if( tag[i].classList.contains("poof") ){
            tag[i].classList.remove("poof")
        }else{
            tag[i].classList.add("poof");
        } 
    }

}

function desaparesito(immagini) {
    addClassToImg(immagini);
    for ( let i = 0; i < immagini.length; i++ ){
        if( immagini[i].classList.contains("poof")){
            immagini[i].style.display = "none";
        }else{
            immagini[i].style.display = "block";
        }
    }
   
}

button.addEventListener ("click", function() {
    desaparesito(immagini);
});