# DESCRIZIONE

### **MILESTONE 1**
aggiungere event listener a tutti i numeri (0-9)
quando si clicca su un numero, concatenarlo al numero visualizzato in alto

**SVOLGIMENTO**
- [x] seleziono tutti i numeri con querySelectorAll
- [x] definisco event listener click
    - [x] definisco una funzione che stampa il numero cliccato e concatenarlo

### **MILESTONE 2**
aggiungere event listener a tutti gli operatori
quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto

**SVOLGIMENTO**
- [x] seleziono tutti gli operatori
- [x] assegno l'event listener
    - [x] all' attivazione salvo il valore e l'operatore in due variabili globali
    - [x] ripulisco la barra

### **MILESTONE 3**
aggiungere event listener al pulsante =
quando si clicca su =, salvare il secondo operando, effetuare il calcolo corretto in base all'operatore selezionato e visualizzare il risultato in alto

**SVOLGIMENTO**
- [x] seleziono l'=
- [x] gli assegno event listener
    -[x] al clic salvo il numero in una variabile globale
- [x] condizione con if per stampare il risultato corretto in base all'operatore

### **MILESTONE 4**
pulsante canc: cliccando il pulsante si resetta il calcolo

**SVOLGIMENTO**
- [x] aggiungi condizione nell'event listener degli operatori
    -[x] se il valore è C allora azzero tutte le variabili globali


### **BONUS**
verificare che non si stia cercando di dividere per 0

**SVOLGIMENTO**
- [x] condizione if nell'evemnt listener dell'=
    -[x] se operatore = / e valore2 = 0 stampo errore
