let resault = document.querySelector("h3");
let lives = document.querySelector("#lives");

let amountDrawnCards = 0;

function generateDeck(){

    let deck = [];

    for(i=1; i<13; i++){

        let card = {
            id: i,
            img: `char-${i}.png`,
            matched: false,
            flipped: false
        }

        deck.push(card) // card A
        deck.push(card) // card B
        

    }

    //let shuffle = shuffleArray(deck)
    console.log(deck)
    return deck

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

let failSafeCardValue1 = null;
let failSafeCardValue2 = null;

let amountClicked = 0;
let livesLeft = 3;

for(let i = 0; i<cards.length; i++){

    cards[i].addEventListener('click', (e) => {
        console.log("card ID:" + e.target.parentNode.getAttribute('data-id'));
        e.target.parentNode.classList.add('flipped')
        
        console.log("amount of times clicked:" + amountClicked);

        amountClicked = amountClicked+1;

        document.querySelector('#cardCount').innerHTML =`Cards Drawn: ${amountDrawnCards+1}`;

        

        if (amountClicked == 1) {
            cardValue1 = e.target.parentNode.getAttribute('data-id');
            failSafeCardValue1 = e.target.parentNode.getAttribute('data-id');
        } else if (amountClicked == 2) {
            cardValue2 = e.target.parentNode.getAttribute('data-id');
            failSafeCardValue1 = e.target.parentNode.getAttribute('data-id');
            cardChecker()

        } 
        function cardChecker() {

        if (cardValue1 == cardValue2) {
            console.log("pair!")
            cardValue1 = null;
            cardValue2 = null;
            failSafeCardValue1 = null
            failSafeCardValue2 = null
            amountClicked = 0;
            resault.innerHTML = "It's a pair!"
        } else {
            console.log("not Pair!")

            document.querySelector(`[data-id="${cardValue1}"]`).classList.remove('flipped'); //only removes the flipped object on A cards not B cards
            document.querySelector(`[data-id="${cardValue2}"]`).classList.remove('flipped');

            
            amountClicked = 0;
            resault.innerHTML = "It's NOT a pair!";
            //livesLeft = livesLeft-1 ;
            lives.innerHTML = `Lives left: ${livesLeft}`;
            console.log("Lives Left:" + livesLeft);
            failSafeFlipped();
        }

        //Lives checker (to activate lives mode remove the "//"" in 107)
        if (livesLeft == 0) {
            alert("Game Over!")
            location.reload();
        }
    }
        amountDrawnCards = amountDrawnCards+1;
        console.log("amount Drawn:" + amountDrawnCards)
    })  
} 

function failSafeFlipped () {

    document.querySelector(`[data-id="${cardValue1}"]`).classList.remove('flipped'); 
    document.querySelector(`[data-id="${cardValue2}"]`).classList.remove('flipped');

    failSafeCardValue1 = null;
    failSafeCardValue2 = null;
    
}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}





//clears clicks, cardvalue1 and 2

