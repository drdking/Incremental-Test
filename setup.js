const bottom_menu_buttons = [
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
// Add logic for switcing CSS themes eventually

function set_up_bottom_menu (){
    const bottom_menu = document.getElementById("bottom_menu")
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

function first_load() {
    

}
