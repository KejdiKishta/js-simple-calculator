//* seleziono i numeri
const numbers = document.querySelectorAll(".number-item")
console.log(numbers);
let digits = document.querySelector(".digits");

let valoriDigitati = "";
let operatore = "";
let valoriDigitati2 = "";

//* funzione che digita i numeri
for (let i = 0; i < numbers.length; i++){
    let curNumber = numbers[i];
    
    curNumber.addEventListener("click", digita);
}

//* seleziono gli operatori
const operations = document.querySelectorAll(".sign-item");
console.log(operations);

//* funzione per gli operatori
for (let i = 0; i < operations.length; i++) {
    let curOperator = operations[i];
    
    curOperator.addEventListener("click", sign);
};

//* seleziono il tasto = per dargli event listener
const equal = document.querySelector(".equal");

//* funzione per il calcolo del risultato
equal.addEventListener("click", result);
