function digita () {
    //* seleziono il contenuto del testo cliccato
    const clickedNumber = this.textContent;
    
    if (digits.innerHTML === "0") {
        //* aggiungo il numero alla bar
        digits.innerHTML = clickedNumber;
    } else {
        digits.innerHTML += clickedNumber;
    }
    
    // if (digits.innerHTML === "0" && clickedNumber !== "0") {
    //     // Sostituisci lo zero con il numero cliccato
    //     digits.innerHTML = clickedNumber;
    // } else if (digits.innerHTML !== "0") {
    //     // Aggiungi semplicemente il numero cliccato
    //     digits.innerHTML += clickedNumber;
    // }
    

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

    if (this.textContent !== "C"){
        operatore = this.textContent;
        console.log(operatore);
    } else {
        console.log("cancellato");
    }
}