let score = 0;
let increase_amount = 1;
let upgrade_cost = 10;
let test = 0;

const button = document.getElementById("goUpBtn");
const upgrade_button = document.getElementById("upgradeBtn");
const cheat_btn = document.getElementById("cheat_btn");

const score_display = document.getElementById("score_display");
const upgrade_cost_display = document.getElementById("upgrade_cost_display");
const increase_display = document.getElementById("increase_display");

function scoreChange(){
    score += increase_amount;
    updateDisplay();
}

function updateDisplay(){
    score_display.textContent = "Score: " +score;
    upgrade_cost_display.textContent = "Upgrade Cost: "+upgrade_cost;
    increase_display.textContent = "Score Per Click: "+increase_amount;
}

function upgrade(){
    score -= upgrade_cost;
    upgrade_cost *= 2;
    increase_amount += 1;
    updateDisplay();
}

function cheat(CHEAT_AMOUNT){
    console.log(CHEAT_AMOUNT);
    console.log(test); test ++;
    score += CHEAT_AMOUNT;
    updateDisplay();
}

//cheat_btn.onclick = scoreChange;
//cheat_btn.onclick = cheat(100);
cheat_btn.addEventListener("click",() => {cheat(100)});


button.addEventListener("click", scoreChange);
upgrade_button.addEventListener("click",upgrade);

/*button.addEventListener("click", () => {
    console.log("test")
    score ++;
    score_display.textContent = "Score: " +score;
}) */
