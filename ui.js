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

}

//UI = new UI();