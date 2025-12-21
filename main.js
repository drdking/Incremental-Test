let isRunning = false; // will need to get moved somewhere
let isRunning2 = false;
let cd = null;
let cd2 = null;
let abcd = 0;
let STOPLOOP = false;

class Game {
    constructor(){
        console.log("starting main game constructor");
        //UI.first_load();
        this.UI = new UI();
    
        this.test = 0;
    
        const dark_mode = document.getElementById("dark_mode_btn");

        dark_mode.addEventListener("click", () => {
            //alert("BLAH");
            console.log("Clicked dark mode button");
            //this.test += 3;
            this.UI.update_score();
            
            // Trying to add logic to play animations

            if (!isRunning2) { //Button is off, needs to turn on
                isRunning2 = true;
                dark_mode.textContent = "Researching";
                dark_mode.classList.add("running"); // added running class
                //dark_mode.style.color ="#00F";

                dark_mode.style.setProperty("--cooldown", '3s');

                cd2 = setInterval(() => {
                    this.test +=3;
                    this.UI.update_score();

                    //Reseting animation and restarting
                    dark_mode.classList.remove("running");
                    void dark_mode.offsetWidth;
                    dark_mode.classList.add("running");
                }, 3000 ); // Cooldown time
            } else { // Turn off
                isRunning2 = false;
                dark_mode.textContent = "Dark mode btn Click";
                dark_mode.classList.remove("running");
                clearInterval(cd2);
                cd2 = null;
            }



        });
        const click_btn = document.getElementById("click_btn");

        click_btn.addEventListener("click", () => {
            console.log("Clicked click btn");
            //this.test += 1;
            //this.UI.update_score();
            
            // Trying to add logic to play animations

            if (!isRunning) { //Button is off, needs to turn on
                isRunning = true;
                click_btn.textContent = "Researching";
                click_btn.classList.add("running"); // added running class

                click_btn.style.setProperty("--cooldown", '1s');

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

        // Test timer for main game loop/refrehsing
        let cdddd = setInterval(() => {
            console.log("TICK")
            // abcd ++;
            // if(abcd>100){
            //     clearInterval(cdddd);
            //     cdddd=null;
            //     console.log(abcd);
            // }
            this.UI.refresh_game_window();
            if(STOPLOOP){
                clearInterval(cdddd);
                cdddd = null;
                console.log("STOPPED LOOP");
            }
        }, 500 );


        console.log("ending main game constructor");
    }

    create_button(btn, targetID){
        console.log("creating button inside $GM");
        const target = document.getElementById(targetID);
            let new_btn = new BTN(btn, targetID);



        //default_btn.forEach(button => {
          //  let new_btn = new BTN(button, targetID);
        // const new_btn = document.createElement("div");
        // new_btn.id = button.id;
        // new_btn.textContent = button.name;
        // new_btn.classList.add("btn");
        // new_btn.addEventListener("click", () => button_on(new_btn));

        // target.appendChild(new_btn);
    //});

    }

    testing(){

 //       this.UI.
    }
}



$GM = new  Game();


