// Scripts for Initial Setup of game screen

bottom_menu_buttons = [
    {
        id: "hello",
        name: "Hello",
        click: () => {
            console.log("click");
            document.getElementById("game_container").innerHTML = "";
            default_btn.forEach(button => {
                console.log(`From the bottom menu buttons list: Creating button:${button.id}`)
                //$GM.create_button(button,"game_container")
                new BTN(button, "game_container");
        });
            //$GM.create_button("game_container");
        }
    },{
        id: "dark_mode",
        name: "Dark Mode",
        click: () => {
            console.log("dark_mode")
            STOPLOOP = true;
        }
    },{
        id: "light_mode",
        name: "Light Mode",
        click: () => console.log("light_mode")
    }
];

/* Messing with transfering objects and classes.. not needed 
console.log(bottom_menu_buttons);

bottom_menu_buttons.forEach(btn => {
    let blah = btn;
    console.log(btn);
    console.log(blah);
    console.log(blah.id);
    blah.id = "sorry";
    console.log(blah.id);
    console.log(btn.id);
})

function transferObject(source){
    console.log("transferring....");
}*/

// class Test{
//     constructor(source){
// //         this = source;
// //     }
// // }

// bottom_menu_buttons.forEach()


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

// console.log("PLaying with xml");


// let txtFile = new XMLHttpRequest();
// txtFile.open("GET", "file://C:/gethub.com/buttonscsv.csv");
// let alltext = txtFile.responseText;

// console.log(alltext);

// const deserializeRow = (row, delimiter = ',') => {
//   const values = [];
//   let index = 0, matchStart = 0, isInsideQuotations = false;
//   while (true) {
//     if (index === row.length) {
//       values.push(row.slice(matchStart, index));
//       break;
//     }
//     const char = row[index];
//     if (char === delimiter && !isInsideQuotations) {
//       values.push(
//         row
//           .slice(matchStart, index)
//           .replace(/^"|"$/g, '')
//           .replace(/""/g, '"')
//           .replace(/\\n/g, '\n')
//       );
//       matchStart = index + 1;
//     }
//     if (char === '"')
//       if (row[index + 1] === '"') index += 1;
//       else isInsideQuotations = !isInsideQuotations;
//     index += 1;
//   }
//   return values;
// };

// function CSVtoObject(source, delimiter = ','){
//   const rows = source.split('\n');
//   const headers = deserializeRow(rows.shift(), delimiter);
//   return rows.map((row) => {
//     const values = deserializeRow(row, delimiter);
//     return headers.reduce((obj, key, index) => {
//       obj[key] = values[index];
//       return obj;
//     }, {});
//   });
// };

// let testtest = CSVtoObject(alltext,',')

// console.log(testtest[0]);

// //let newnewbuttons = New CSVtoObject (buttonscsv.csv)