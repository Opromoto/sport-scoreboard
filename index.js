const aScore = document.getElementById("a-score")
const hScore = document.getElementById("h-score")

const aBtn1 = document.getElementById("abtn1")
const aBtn2 = document.getElementById("abtn2")
const aBtn3 = document.getElementById("abtn3")

const hBtn1 = document.getElementById("hbtn1")
const hBtn2 = document.getElementById("hbtn2")
const hBtn3 = document.getElementById("hbtn3")

const messageEl = document.getElementById("para")

const newBtn = document.getElementById("new")


let aGoals = 0
let hGoals = 0

function aAdd1(){
    aGoals += 1
    aScore.textContent = aGoals
    message()
}
function aAdd2(){
    aGoals += 2
    aScore.textContent = aGoals
    message()
}
function aAdd3(){
    aGoals += 3
    aScore.textContent = aGoals
    message()
}
function hAdd1(){
    hGoals += 1
    hScore.textContent = hGoals
    message()
}
function hAdd2(){
    hGoals += 2
    hScore.textContent = hGoals
    message()
}
function hAdd3(){
    hGoals += 3
    hScore.textContent = hGoals
    message()
}

function message() {
    if (aGoals === hGoals) {
        messageEl.textContent = "Wohoo, it's a draw!!"
    }else if (aGoals > hGoals) {
        messageEl.textContent = "The guest team is wining!!"
    } else {
        messageEl.textContent = "The home team is wining!!"
    }
}
function newGame() {
    aGoals = 0
    hGoals = 0
    hScore.textContent = hGoals
    aScore.textContent = aGoals
}


aBtn1.addEventListener("click",aAdd1)
aBtn2.addEventListener("click",aAdd2)
aBtn3.addEventListener("click",aAdd3)

hBtn1.addEventListener("click",hAdd1)
hBtn2.addEventListener("click",hAdd2)
hBtn3.addEventListener("click",hAdd3)

newBtn.addEventListener("click",newGame)
