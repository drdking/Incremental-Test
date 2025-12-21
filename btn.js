// Main constructor class for creating buttons
let default_btn = [
    {
        id: "fast_research",
        name: "Fast Research",
        on_text: "Resarching",
        value: 1,
        resource: "research",
        time: 1,
        starting: true,
        unlocked: true,
        exists: false
    },{
        id: "slow_research",
        name: "Slow Research",
        on_text: "Researching",
        value: 3,
        resource: "research",
        time: 3,
        unlocked: false,
        exists: false,
        unlock_amt: 10
    },{
        id: "super_research",
        name: "Super Research",
        on_text: "Researching",
        value: 10,
        resource: "research",
        time: 5,
        unlocked: false,
        exists: false,
        unlock_amt: 100
    }
];



class BTN {
    constructor(button, targetID){
        console.log("Starting Button Construrtor");
        console.log(targetID);

        Object.assign(this,button);
 
        //this.delay = 0;
        this.IRun = false;
        this.cdd = null;

        this.create_new(targetID);

        console.log("Ending Button Constructor");
    }

    // Slightly deprecitaed, moving some code to the UI refresh function
    create_new(targetID) {
        console.log(`Target: ${targetID}`);
        // if(!this.exists){ // See if already exists
        //     this.check_unlocked();
        //     if(!this.unlocked){
        //         console.log(`${this.id} Not Unlocked`);
        //         return;
        //     }
        //     console.log("Continuing...")
            let target = document.getElementById(targetID);
            let new_btn = document.createElement("div");
            new_btn.id = this.id;
            new_btn.textContent = this.name;
            new_btn.classList.add("btn");
            new_btn.addEventListener("click", () => this.turn_on());

            target.appendChild(new_btn);
        
    }

    check_unlocked(){
        if($GM.test >= this.unlock_amt){
            this.unlocked = true;
        }

    }

    turn_on() {
        console.log(`Turning On: ${this.id}`)
        let tbtn = document.getElementById(this.id);
        if (!this.IRun) { //Button is off, needs to turn on
            this.IRun = true;
            tbtn.textContent = this.on_text;
            tbtn.classList.add("running");
            tbtn.style.setProperty("--cooldown", `${this.time}s`);

            this.cdd = setInterval(() => {
                $GM.test += this.value; 
                $GM.UI.update_score();

                //Reseting animation and restarting
                tbtn.classList.remove("running");
                void tbtn.offsetWidth;
                tbtn.classList.add("running");
            }, this.time * 1000 ); 
        } else { // Turn off
            console.log("turning off " + this.id);
            this.IRun = false;
            tbtn.textContent = this.name;
            tbtn.classList.remove("running");
            clearInterval(this.cdd);
            this.cdd = null;
        }
        }


}

// Creating Buttons
// Need to move this into a class 
/*
function create_button(targetID){
    console.log("creating button");
    const target = document.getElementById(targetID);
    default_btn.forEach(button => {
        new_btn = new BTN(button, targetID);
        // const new_btn = document.createElement("div");
        // new_btn.id = button.id;
        // new_btn.textContent = button.name;
        // new_btn.classList.add("btn");
        // new_btn.addEventListener("click", () => button_on(new_btn));

        // target.appendChild(new_btn);
    });
}
*/

/* Depreciated button on/off function, 
has been moved into the button class

function button_on(btn){
    console.log("button on");
    console.log(btn.id);

    let delay = null;
    let IRun = false;

    $GM.UI.update_score();
    console.log("Before If Else");
    console.log(IRun);
    
    if (!IRun) { //Button is off, needs to turn on
        IRun = true;
        console.log("Inside if else function");
        console.log(IRun);
        btn.textContent = "Researching";
        btn.classList.add("running");
        btn.style.setProperty("--cooldown", '3s');

        delay = setInterval(() => {
            $GM.test += 1; // Need to customize this... in class?
            $GM.UI.update_score();

            //Reseting animation and restarting
            btn.classList.remove("running");
            void btn.offsetWidth;
            btn.classList.add("running");
        }, 3000 ); // Cooldown time need customized
    } else { // Turn off
        console.log("turning off")
        IRun = false;
        btn.textContent = "Dark mode btn Click";
        btn.classList.remove("running");
        clearInterval(delay);
        delay = null;
    }
} */