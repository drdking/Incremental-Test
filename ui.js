class UI {
    constructor(){
        console.log("starting UI constructor top");
        this.set_up = new Set_Up();

        this.first_load();
        console.log("ending UI constructor end");
    }

    first_load() {
        console.log("running first_load");
        this.set_up.reset_UI(); // Probably shouldn't be here
        
        this.set_up.bottom_menu();
        this.set_up.score_window();
    }

    update_score() {
        //console.log($GM.test);

        let score_window = document.getElementById("score_window");
        score_window.textContent = "Score: " + $GM.test;
        
    }

    refresh_game_window(){
        //document.getElementById("game_container").innerHTML = "";

        // Will Loop through each of the buttons, check if they exist and if 
        // they're unlocked, 
        // If unlocked and does not exist will create button
        default_btn.forEach(button => {
            console.log(`From inside UI.refresh_game_window: Creating button:${button.id}`)
            //$GM.create_button(button,"game_container")
            if(!button.exists && button.unlocked){
                new BTN(button, "game_container");
                button.exists = true;
            }
        });

        // Temp function to check if unlocked
        // This needs a new home

        default_btn.forEach(button => {
                    if($GM.test >= button.unlock_amt){
            button.unlocked = true;
        }
        });

    }

}

//UI = new UI();