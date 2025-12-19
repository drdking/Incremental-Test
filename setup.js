// Scripts for Initial Setup of game screen

bottom_menu_buttons = [
    {
        id: "hello",
        name: "Hello",
        click: () => console.log("click")
    },{
        id: "dark_mode",
        name: "Dark Mode",
        click: () => console.log("dark_mode")
    },{
        id: "light_mode",
        name: "Light Mode",
        click: () => console.log("light_mode")
    }
];

// Add logic for changing CSS States eventualy..


// Do I need a class only for set up tasks?
// Can these all be under the UI class?
// Main benifite I can think of is easier to call
// i.e.: ui.set_up.reset_UI()
// that feels cleaner that just having a bunch of functions
// like set_up_reset_UI() just floating around in the code

class Set_Up{
    constructor(){

    }

    // Reset main <div>s, emptying their contents
    // This shouldn't likely be used
    // It's going to cause confusion between if I make 
    // changes in the .html and the real game
    reset_UI(){
        let page_container = document.getElementById("page_container");
        let top_bar = document.getElementById("top_bar");
        let game_container = document.getElementById("game_container");
        let score_display = document.getElementById("score_display");
        let score_window = document.getElementById("score_window");
        let bottom_menu = document.getElementById("bottom_menu");
        top_bar.textContent = "top bar reset";
        score_display.textContent = "score_display reset";
        score_window.textContent = "score_window reset";
        bottom_menu.textContent = "bottom_menu reset";


        console.log("running reset UI");
    }

    bottom_menu (){
        console.log("setting up bottom menu");
        let bottom_menu = document.getElementById("bottom_menu");
        bottom_menu.textContent="YA YA YA";

        bottom_menu_buttons.forEach(button => {
            let newBTN = document.createElement('span');
            newBTN.textContent = button.name;
            newBTN.addEventListener("click", button.click);
            newBTN.style.cursor = "default";
            bottom_menu.append(newBTN);
            bottom_menu.append(" | ");
        });
    }

    score_window (){
        let score_window = document.getElementById("score_window");
        score_window.textContent = "Score_Window Set up";
        score_window.textContent = "";
    }

}

