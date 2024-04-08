function digita () {
    //* seleziono il contenuto del testo cliccato
    const clickedNumber = this.textContent;

    //* seleziono la barra in cui mettere il digit
    let bar = document.querySelector(".digits")
    
    //* aggiungo il numero alla bar
    bar.append(clickedNumber);
    
    valoriDigitati += this.textContent;
    console.log(valoriDigitati);
}

function sign() {
    //* seleziono la barra da azzerare al click
    let bar = document.querySelector(".digits");
    bar.textContent = "0";

    operatore = this.textContent;
    console.log(operatore);
}