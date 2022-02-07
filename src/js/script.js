/*let HTMLCard = document.querySelector('.card')

//click event test
HTMLCard.addEventListener('click', () => {
    console.log('test')
})

let cardApperance = {
    //card apperance values
    minHight: 1,
    minWidth: 1,

}

let cardValue = {value: 1}

function test1 () {
    if (cardValue.value = 1) {
        "the code works!"
    }
    else {
        "the code does NOT work :C"
    }
} */
// code from J

let amountDrawnCards = 0;

function generateDeck(){

    let deck = [];

    for(i=1; i<13; i++){

        let card = {
            id: i,
            img: `char-${i}.png`,
            matched: false,
            flipped: true
        }

        deck.push(card) // card A
        deck.push(card) // card B

    }

    return deck;

}

function updateUI(){

    document.querySelector('main').innerHTML = '';

    // loopa igenom våra kort
    deck.forEach(card => {
        
        let flipped = "";
        if(card.flipped){
            flipped = "flipped";
        }

        // generera HTML för varje kort
        let el = `<article data-id="${card.id}" class="${flipped}">
            <img src="img/${card.img}" alt="card">
        </article>`;

        document
        .querySelector('main')
        .insertAdjacentHTML('beforeend', el);

    })
    
    
    // Lyssna på klick på varje kort

}


let deck = generateDeck();
console.log(deck);
updateUI();

// Get clicked card ID
let cards = document.querySelectorAll('article');

console.log(cards)

let cardValue1 = null;
let cardValue2 = null;
let amountClicked = 0;

for(let i = 0; i<cards.length; i++){

    cards[i].addEventListener('click', (e) => {
        console.log(e.target.parentNode.getAttribute('data-id'));
        
        console.log(amountClicked);

        amountClicked = amountClicked+1;

        if (amountClicked == 1) {
            cardValue1 = e.target.parentNode.getAttribute('data-id');
            console.log("test1")
        } else if (amountClicked == 2) {
            cardValue2 = e.target.parentNode.getAttribute('data-id');
            console.log("test2")
            cardChecker()
        } 
        function cardChecker() {

        if (cardValue1 == cardValue2) {
            console.log("pair!")
            cardValue1 = null;
            cardValue2 = null;
            amountClicked = 0;
        } else {
            console.log("not Pair!")
            cardValue1 = null;
            cardValue2 = null;
            amountClicked = 0;

        }
    }
        amountDrawnCards = amountDrawnCards+1;
        console.log(amountDrawnCards)
   
        
    })  
} 





//clears clicks, cardvalue1 and 2

