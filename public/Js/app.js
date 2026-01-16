let cards = document.querySelectorAll(".memory-card")

let firstCard = null

let secondCard = null
let lockCard = false 

cards.forEach(c=>{
    c.addEventListener("click", flipCard)
})

function flipCard() {

    if (lockCard)  return 
    if (this === firstCard) return 

    this.classList.add("flip")
    // console.log(this);
    if (!firstCard) {
        firstCard= this
        return
    }
    secondCard = this
    lockCard= true 
    console.log(firstCard , secondCard , lockCard);
    
    
    checkMatch()
    
}

function checkMatch() {
  let isMatch =   firstCard.querySelector(".picGame").src === secondCard.querySelector(".picGame").src

    if (isMatch) {
        disableCards()
        
    }else{
        unflipCards()
    }
    
}


function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
}

function unflipCards() {
    lockCard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
    }, 1000);
}


function resetBoard() {
    [firstCard, secondCard, lockCard] = [null, null, false];
}


function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12); 
        card.style.order = randomPos;
    });
}

shuffle();