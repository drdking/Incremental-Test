const bottom_menu_buttons = [
    {
        id: "hello",
        name: "Hello",
    },{
        id: "dark_mode",
        name: "Dark Mode"
    },{
        id: "light_mode",
        name: "Light Mode"
    }
];


function set_up_bottom_menu (){
    const bottom_menu = document.getElementById("bottom_menu")
    bottom_menu.textContent="YA YA YA";

    bottom_menu_buttons.forEach(button => {
        let newBTN = document.createElement('span');
        newBTN.textContent = button.name;
        bottom_menu.append(newBTN);
        bottom_menu.append(" | ");
    });

}