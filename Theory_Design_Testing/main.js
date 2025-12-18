// Updates: Refactored the code per some recs from tutorials / chatGPT(yes I'm the problem)
// Not sure if I like how this actually looks

// Next: GPT is saying to try to make it class based


/*let score = 0;
let increase_amount = 1;
let upgrade_cost = 10;
let test = 0; 

const button = document.getElementById("goUpBtn");
const upgrade_button = document.getElementById("upgradeBtn");
const cheat_btn = document.getElementById("cheat_btn");

const score_display = document.getElementById("score_display");
const upgrade_cost_display = document.getElementById("upgrade_cost_display");
const increase_display = document.getElementById("increase_display");  */

const game = {
    score: 0,
    increase_amount: 1,
    upgrade_cost: 10
}

const elements = {
    button : document.getElementById("goUpBtn"),
    upgrade_button : document.getElementById("upgradeBtn"),
    cheat_btn : document.getElementById("cheat_btn"),

    score_display : document.getElementById("score_display"),
    upgrade_cost_display : document.getElementById("upgrade_cost_display"),
    increase_display : document.getElementById("increase_display")
}

let test = 0; // random var for testing things


function updateDisplay(){
    elements.score_display.textContent = "Score: " +game.score;
    elements.upgrade_cost_display.textContent = "Upgrade Cost: "+game.upgrade_cost;
    elements.increase_display.textContent = "Score Per Click: "+game.increase_amount;
}

function scoreChange(){
    game.score += game.increase_amount;
    updateDisplay();
}



function upgrade(){
    game.score -= game.upgrade_cost;
    game.upgrade_cost *= 2;
    game.increase_amount += 1;
    updateDisplay();
}

function cheat(CHEAT_AMOUNT){
    console.log(CHEAT_AMOUNT);
    console.log(test); test ++;
    game.score += CHEAT_AMOUNT;
    updateDisplay();
}

//cheat_btn.onclick = scoreChange;
//cheat_btn.onclick = cheat(100);
elements.cheat_btn.addEventListener("click",() => {cheat(100)});


elements.button.addEventListener("click", scoreChange);
elements.upgrade_button.addEventListener("click",upgrade);

/*button.addEventListener("click", () => {
    console.log("test")
    score ++;
    score_display.textContent = "Score: " +score;
}) */


updateDisplay();