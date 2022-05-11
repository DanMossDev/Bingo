import { OPTIONS } from "./options.js";

let options = [...OPTIONS]
let clicks = []


const bingoSlots = document.getElementsByClassName("buttons");
const playAgain = document.getElementById("playagain");


function randomiseSlots() {
    for (let i = 0; i < bingoSlots.length; i++) {
        bingoSlots[i].addEventListener("click", function(){ clickedSlot(bingoSlots[i]) });
        let newText = options[Math.floor(Math.random() * options.length)]
        bingoSlots[i].textContent = newText;
        options.splice(options.indexOf(newText), 1);
    }
}

function clickedSlot(slot) {
    slot.style.backgroundColor = '#ff3ea5ff';  //change background colour of clicked slot
    let query1 = slot.id.split(',')[0];
    let query2 = slot.id.split(',')[1];
    clicks.push(slot.id.split(','));   //add the coordinate ID of the clicked slot, and split it into
    clicks = clicks.flat();

    checkForWin(query1);
    checkForWin(query2);
}

function checkForWin(query) {
    if (clicks.filter(x => x==query).length >= 5) { victorySequence();}
}

function victorySequence() {
    document.getElementById("table").style.display = 'none';
    alert(`BINGO! It took you ${clicks.length/2} turns.`)
    playAgain.style.visibility = 'visible';
}

randomiseSlots();
