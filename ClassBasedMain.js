// Modified from GPT, on main.js in class based form...
let test = 0; // random variable for me

class Game {
    constructor(){
        //Main variables starting ponits
        // ?? SHould this be moved to another constants file?
        this.score = 0;
        this.increase_amount = 1;
        this.upgrade_cost = 10;
        
        // Make elements from page
        this.elements = {
            button : document.getElementById("goUpBtn"),
            upgrade_button : document.getElementById("upgradeBtn"),
            cheat_btn : document.getElementById("cheat_btn"),

            score_display : document.getElementById("score_display"),
            upgrade_cost_display : document.getElementById("upgrade_cost_display"),
            increase_display : document.getElementById("increase_display")
        }
    
        // Bind Events ??? NO IDEA WHAT THIS IF FOR YET
        this.bindEvents();

        // Inital render.... gotcha
        this.updateDisplay();
    }

    // Adding all the functions:

    updateDisplay(){
        this.elements.score_display.textContent = "Score: " + this.score;
        this.elements.upgrade_cost_display.textContent = "Upgrade Cost: "+this.upgrade_cost;
        this.elements.increase_display.textContent = "Score Per Click: "+this.increase_amount;
    }

    scoreChange(){
        this.score += this.increase_amount;
        this.updateDisplay();
    }

    upgrade(){
        this.score -= this.upgrade_cost;
        this.upgrade_cost *= 2;
        this.increase_amount += 1;
        this.updateDisplay();
    }

    cheat(CHEAT_AMOUNT){
        console.log(CHEAT_AMOUNT);
        console.log(test); test ++;
        this.score += CHEAT_AMOUNT;
        this.updateDisplay();
    }

    // still not sure what this is for
    // Like I understand that its setting up all the event liseners
    // but why here... why like this??
    bindEvents() {
        this.elements.button.addEventListener(
            "click", () => this.scoreChange() 
        );
        this.elements.upgrade_button.addEventListener(
            "click", () => this.upgrade()
        );
        this.elements.cheat_btn.addEventListener(
            "click", () => this.cheat(100)
        );
    }
} 


const game = new Game(); // don't forget to actually start the game


/* just commenting out all the old code

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
    game.score += game.CHEAT_AMOUNT;
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
}) 


updateDisplay(); */