// TEXT ADVENTURE GAME
const start = `WAR!! The galaxy is in turmoil and it is your job as the chosen one to save the galaxy!`;

const enter = "Please enter 1 or 2 for your answer";

const gameOver = "The life drains from the chosen hero... The galaxy delves into darkness...";

const q1 = `You soar through the endless darkness in a glorious fight against your separatist enemies, BUT OH NO!! Buzz droids have swarmed your master's ship! do you...
1. Attempt to save the chancellor, leaving your master to his own devices.
OR
2. Attempt an EMP blast that could shut down all the droids, potentially saving your master.
OR
3. Fire wildly in your master's general direction until all buzz droids are destroyed.
${enter}`;

const gameOver1 = `You set of the EMP and cause both of your ships to shut down and crash into the nearby separatist cruiser.  ${gameOver} (Did you really think that would work? You're in an ELECTRONIC SHIP co-piloted by DROIDS.)`;

const q2 = `Your wild shooting works! However, your master's ship is still damaged... He's going to crash! You should...
1. Try to get under his ship and use your ship to keep his ship up.
OR
2. Craaaaaash Landing!!!!
${enter}`;

const altQ2 = `You flee... Surely your master can handle himself, right? No time to think about something like that- There are many vulture droids ahead. Should you...
1. Attack! No time to think, these droids are: In. Our. Way.
OR
2. Attempt a sneakier approach. You know... Rex said he might have installed some interesting technology on your ship... All you have to do is hit this red button.
${enter}`;

const gameOver2 = `Your ship is utterly crushed by the weight of his ship... ${gameOver} (That was foolish- wasn't it?)`;

const altGameOver2 = `You explode.${gameOver} (I guess there's a reason Rex isn't a commander...)`;

const q3 = `You successfully crash into the cargo bay of Grievous' ship! Now to get to the Leader of the Separatist rebellion. But upon reaching Grievous' quarters you find... The Chancellor! Thank the heavens! but someone else is here to... should you...
1. Prepare for battle.
OR
2. Free the chancellor.
${enter}`;

const altQ3 =`You blaze through the enemy combatants- you are the greatest pilot in the galaxy after all. You reach Grievous' ship and approach where Grievous' quarters are. should you...
1. Enter through a nearby docking port.
OR
2. Fire wildly.
${enter}`;

const gameOver3 = `It was a trap! Dooku emerges and cuts down you and your master with one quick movement. ${gameOver} (Probably should have just acted huh?)`;

const altGameOver3 = `You strike a nearby gasline with your wild firing... It catches you in the blast. ${gameOver} (Probably shouldn't have fired with purpose, huh?)`;

const q4 = `Dooku emerges and traps your master under debris. You must prepare yourself for a battle of ages. do you...
1. Stop to talk.
OR
2. Battle.
${enter}`;

const altQ4 = `You dock and upon entering... Dooku spots you! should you...
1. Stop to talk.
OR
2. Battle.
${enter}`;

const gameOver4 = `Dooku does not have time to speak of what matters you have. He severs your head from your neck. ${gameOver} (I kinda thought you'd do that to him...)`;

const q5 = `Dooku is barely a threat... You get him on his knees in no time and before you can walk away the chancellor speaks... he tells you to kill Dooku... Should you...
1. Give into your anger! DO IT! He just killed your master, right? He DESERVES it.
OR
2. spare the Count. You're a peacekeeper, not a soldier.
${enter}`;

const altQ5 = `Dooku is barely a threat... You get him on his knees in no time and knock him out before he can be any more of a threat. Upon entering the quarters you find Obi Wan with the Chancellor. He tells you that your master is... A traitor??!?!! should you...
1. Prepare for battle with your master.
OR
2. Stop to talk.
${enter}`;

const gameOver5 = `The chancellor rises and places his once tied hand on your shoulder. You feel a searing pain. The chancellor... killed you??? ${gameOver} (Should've saw that one coming, huh?)`;

const altGameOver5 = `Your master is a very skilled swordsman and he did TRAIN you so with one swift movement he severs your head from your shoulders ${gameOver} (I thought you were the chosen one? Kinda a rip-off.)`;

const sithWin = `You sever the counts head from his neck. The chancellor congratulates you. You master is alright too it seems! He seems less than happy with what you've done. could it be that you've given into something... Dark? That what you've done has set you down the wrong path? Maybe you should've done something different... Nah it's probably fine.`;

const q6 = `You consider your master too good of a man to betray his beliefs, his life... And you. This cannot be so. You join your master who tells you the Chancellor is evil! An evil Sith Lord!! Should you...
1. Prepare for battle, alongside your master.
OR
2. Force push your master away. There is no need for more to be harmed. All that is needed is for this Sith Lord to fall.
${enter}`

const jediWin = `The world has changed. You and your master have made your decisions- no more darkness. No more pain. This is a battle few will remember- but one that will change everything... Are you ready?`

// Alerts the user to start the game
alert (start);

// NESTED CONDITIONAL STATEMENTS
// sets the value of userInput to the user's entry
let userInput = prompt (q1);
// NOTE: prompts return the value entered as a string. That is whu double equals is used instead of triple equals
if (userInput == 3) {  
    userInput = prompt (q2);
    if (userInput == 2) {
        userInput = prompt(q3);
        if (userInput == 2) {
            userInput = prompt (q4);
            if (userInput == 2) {
                userInput =prompt (q5)
                if (userInput == 1) {
                    alert (sithWin)
                }else {
                    alert (gameOver5)
                }
            }else {
                alert (gameOver4);
            }
        }else {
            alert (gameOver3);
        }
    }else {
        alert (gameOver2);
    }
}else if (userInput == 1) {
    userInput = prompt(altQ2)
    if (userInput == 1) {
        userInput = prompt (altQ3)
        if (userInput == 1) {
            userInput = prompt (altQ4)
            if (userInput == 2) {
                userInput = prompt (altQ5) 
                if (userInput == 2) {
                     userInput = prompt (q6)
                    if (userInput) {
                         prompt (jediWin)
                        }
                    }else {
                            alert (altGameOver5)
                        }
                }else {
                        alert (gameOver4)
                    }
            }else {
                alert (altGameOver3)
            }
        }else {
            alert (altGameOver2)
        }
    }else {
        alert (gameOver1)
    }