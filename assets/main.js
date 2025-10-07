/*
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi 
Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma 
così come lo faremmo "a mano"
*/
//creo un ciclo for per stampare stampare in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    //inserisco la condizione per cui i modulo 3 e 5 stampi FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    //inserisco la condizione per cui i modulo 3 stampi Fizz
    else if (i % 3 === 0) {
        console.log('Fizz');
    //inserisco la condizione per cui i modulo 5 stampi Buzz
    } else if (i % 5 === 0) {
        console.log('Buzz');
    }
}