function digita () {
    //* seleziono il contenuto del testo cliccato
    const clickedNumber = this.textContent;
    
    if (digits.innerHTML === "0") {
        //* aggiungo il numero alla bar al posto dello 0
        digits.innerHTML = clickedNumber;
    } else {
        //* concatenazione
        digits.innerHTML += clickedNumber;
    }

    //* inserisco il contenuto dei bottoni cliccati nella variabile
    if (operatore !== "") {
        //* se è già presente un operatore li stampo nella variabile 2
        valoriDigitati2 += this.textContent
        console.log("2 " + valoriDigitati2);
    } else {
        //* altrimenti nella 1
        valoriDigitati += this.textContent;
        console.log("1 " + valoriDigitati);
    };
}

function sign() {
    //* al clic di un operatore svuoto la barra
    digits.textContent = "0";
    operatore = this.value;
    console.log(operatore);
    
    //* se l'operatore è C svuoto tutte le variabili
    if (operatore === "C") {
        valoriDigitati = "";
        operatore = "";
        valoriDigitati2 = "";
    } 
}

function result() {
    //* prendo i valori digitati con type number
    let valore1 = parseInt(valoriDigitati);
    let valore2 = parseInt(valoriDigitati2);
    //* variabile d'appoggio
    let result = "";

     //* controllo variabili globali
    if(operatore === "" && isNaN(valore1) && isNaN(valore2)) {
        digits.innerHTML = "0"
        return;
        }else if (operatore === "") {
        digits.innerHTML = valore1;
        return;
    } else if (isNaN(valore1)) {
        valore1 = 0;
    } else if (isNaN(valore2)) {
        valore2 = 0;
    }

    //* condizioni per il calcolo del risultato
    // if (operatore === "+") {
    //     result = valore1 + valore2;
    // } else if (operatore === "-") {
    //     result = valore1 - valore2;
    // } else if (operatore === "*") {
    //     result = valore1 * valore2;
    // } else if (operatore === "/" && valore2 === 0) {
    //     result = "ERROR";
    // } else if (operatore === "/") {
    //     result = valore1 / valore2;
    // }

    switch (operatore) {
        case "+":
            result = valore1 + valore2;
            break;
        case "-":
            result = valore1 - valore2;
            break;
        case "*":
            result = valore1 * valore2;
            break;
        case "/":
            if (valore2 !== 0) {
                result = valore1 / valore2;
            } else {    
                result = "ERROR";
            }
            break;
        default:
            result = valore1;
    }
    
    console.log(result);
    //* stampo il risultato nell'HTML
    digits.innerHTML = result;

    //* aggiorno l'ultimo risultato
    valoriDigitati = result;
    operatore = "";
    valoriDigitati2 = "";

    return;
}