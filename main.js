let isRunning = false; // will need to get moved somewhere
let cd = null;

class Game {
    constructor(){
        console.log("starting main game constructor");
        //UI.first_load();
        this.UI = new UI();
    
        this.test = 0;
    
        const dark_mode = document.getElementById("dark_mode_btn");

        dark_mode.addEventListener("click", () => {
            alert("BLAH");
            console.log("Clicked dark mode button");
        });
        const click_btn = document.getElementById("click_btn");

        click_btn.addEventListener("click", () => {
            console.log("Clicked click btn");
            this.test += 1;
            this.UI.update_score();
            
            // Trying to add logic to play animations

            if (!isRunning) { //Button is off, needs to turn on
                isRunning = true;
                click_btn.textContent = "Researching";
                click_btn.classList.add("running"); // added running class
                cd = setInterval(() => {
                    this.test +=1;
                    this.UI.update_score();

                    //Reseting animation and restarting
                    click_btn.classList.remove("running");
                    void click_btn.offsetWidth;
                    click_btn.classList.add("running");
                }, 1000 ); // Cooldown time
            } else { // Turn off
                isRunning = false;
                click_btn.textContent = "Click btn";
                click_btn.classList.remove("running");
                clearInterval(cd);
                cd = null;
            }

        });

        console.log("ending main game constructor");
    }

    testing(){

 //       this.UI.
    }
}



$GM = new  Game();


