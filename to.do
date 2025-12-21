Need to either fix or look at the button logic
Right now each button is a new object which inherits from the button list
So any changes to the button inside the button class will not
update the core values
(aka all the issues I had with exists)

Potenital options: Change how I create buttons, don't make them unique objects from a class
or: define core values inside another class or main game manager. 

2. Refreshing/updating the UI
Initially I wanted to just wipe and replace it
however this ignores all the animations and ended up with counters just running 
in the background w/o any way to stop them.
I feel this may be why ADR uses a slider to move the game window, so they never have to unload anything
