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

    if (operatore !== "") {
        valoriDigitati2 += this.textContent
        console.log("2 " + valoriDigitati2);
    } else {
        valoriDigitati += this.textContent;
        console.log("1 " + valoriDigitati);
    };
}

function sign() {
    digits.textContent = "0";
    operatore = this.value;
    console.log(operatore);
    
    if (operatore === "C") {
        valoriDigitati = "";
        operatore = "";
        valoriDigitati2 = "";
    } 
}

function result() {
    let valore1 = parseInt(valoriDigitati);
    let valore2 = parseInt(valoriDigitati2);
    console.log(operatore);
    let result = "";

    if (operatore === "+") {
        result = valore1 + valore2;
    } else if (operatore === "-") {
        result = valore1 - valore2;
    } else if (operatore === "x") {
        result = valore1 * valore2;
    } else if (operatore === "/") {
        result = valore1 / valore2;
    }

    console.log(result);

    digits.innerHTML = result
}