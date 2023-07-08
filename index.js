/*
    Variable declarations
*/

let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")

let homeCount = 0
let guestCount = 0

/*
    Functions to change home team's score by 1, 2 or 3 points
*/
function addHome1point(){
    homeCount += 1
    homeScoreEl.textContent = homeCount
}

function addHome2points(){
    homeCount += 2
    homeScoreEl.textContent = homeCount
}

function addHome3points(){
    homeCount += 3
    homeScoreEl.textContent = homeCount
}

/*
    Functions to change guest team's score by 1, 2 or 3 points
*/
function addGuest1Point() {
    guestCount += 1
    guestScoreEl.textContent = guestCount
}

function addGuest2Points() {
    guestCount += 2
    guestScoreEl.textContent = guestCount
}

function addGuest3Points() {
    guestCount += 3
    guestScoreEl.textContent = guestCount
}

/*
    Command to start a new game and set the count to 0
*/

function newGame(){
    homeCount = 0
    homeScoreEl.textContent = homeCount
    guestCount = 0
    guestScoreEl.textContent = guestCount
}
