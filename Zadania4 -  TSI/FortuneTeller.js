let fortune1 = "Wkrótce na Twojej drodze stanie ktoś dla Ciebie.";
let fortune2 = "Czeka Cię wielka fortuna, graj w totka.";
let fortune3 = "W weekend pogoda będzie sprzyjać Twoim planom.";
let fortune4 = "Twój kot Cię niedługo zaskoczy.";
let fortune5 = "Dobro do Ciebie zmierza, rozglądaj się uważnie.";

let max = 5; // nadawanie zmiennych nie jest tutaj wymagane - moge wstawic do funkcji bezposrednio liczbe
let min = 1; //
let randomNumber = Math.floor(Math.random() * 5) + 1;

let selectedFortune;

if(randomNumber === 1) {selectedFortune = fortune1;}
else if (randomNumber === 2) {selectedFortune = fortune2;}
else if (randomNumber === 3) {selectedFortune = fortune3;}
else if (randomNumber === 4) {selectedFortune = fortune4;}
else if (randomNumber === 5) {selectedFortune = fortune5;}

console.log(selectedFortune);
