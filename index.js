
const homeScoreEl = document.getElementById("home-score-el")
const guestScoreEl = document.getElementById("guest-score-el")
const containerEl = document.querySelector(".container")

const homeEl = document.getElementById("home")
const guestEl = document.getElementById("guest")

let homeCount = 0
let guestCount = 0

/*
    Add points using an event listener
*/

containerEl.addEventListener("click", function (e) {
    // console.log(e.target.dataset.homeAdd)
    const target = e.target
    const homePoints = target.dataset.homeAdd
    const guestPoints = target.dataset.guestAdd

    if (homePoints) {
        homeCount += parseInt(homePoints)
        homeScoreEl.textContent = homeCount
    }

    if (guestPoints) {
        guestCount += +guestPoints
        guestScoreEl.textContent = guestCount
    }

    highlightLeader()

    if (homeCount == 15 || guestCount == 15) {
        confetti()
    }

})

/*
    To start a new game and set the count to 0
*/

function newGame(){
    homeCount = 0
    homeScoreEl.textContent = homeCount
    guestCount = 0
    guestScoreEl.textContent = guestCount
    homeEl.classList.remove("highlight")
    guestEl.classList.remove("highlight")
}

/*
    To highlight the winner of the game.
*/
function highlightLeader() {
    if (homeCount > guestCount) {
    homeEl.classList.add("highlight")
    guestEl.classList.remove("highlight")
    } else if (homeCount < guestCount) {
        homeEl.classList.remove("highlight")
        guestEl.classList.add("highlight")
    } else {
        homeEl.classList.remove("highlight")
        guestEl.classList.remove("highlight")
    }
}

/*

*/
function confetti() {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti({
    emojis: ['🍔', '🍺', '🍕'],
    confettiNumber: 50,
    emojiSize: 60
    })
    jsConfetti.addConfetti()
}
