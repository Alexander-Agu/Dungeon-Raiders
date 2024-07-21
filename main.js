// A dungeon raider game where the player will decide carefully wich enemys to fight
// They can buy items in the shop that will help with their guest
// As they play the player and enemy health reduces depending on the player and enemy attack points
// Upon the player defeating one enemy he will be rewarded with items
// If the player defeats an enemy they will be directed to the next enemy to battle

// >>>>> PLAYER <<<<< \\
let player = {
    hp: 10000,
    ATKPoints: 20000,
    money: 10000
}

// CONSTANT VARIABLES
const DISPLAY_PLAYER_ATKPOINTS = document.getElementById('player-attack');
const DISPLAY_PLAYER_HP = document.getElementById('player-healthp');
const DISPLAY_PLAYER_MONEY = document.getElementById('player-money');


// >>>>> SHOP SYSTEM <<<<< \\
let itemStore = [
    {
        name: "Axe",
        ATKPoints: 100,
        health: 0,
        price: 800
    },
    {
        name: "Sword",
        ATKPoints: 200,
        health: 0,
        price: 800
    },
    {
        name: "Health Potion",
        ATKPoints: 100,
        health: 50,
        price: 800
    }
];

// Handles the AXE BUTTON
document.getElementById('axe-btn').onclick = ()=>{
    checkFunds(0);
    
    // Display the upgraded ATKPoints
    let newpoints = player.ATKPoints += itemStore[0].ATKPoints;
    DISPLAY_PLAYER_ATKPOINTS.textContent = newpoints;
    console.log("hghnkl")
};

// Handles the SWORD BUTTON
document.getElementById('sword-btn').onclick = ()=>{
    checkFunds(1);

    let newpoints = player.ATKPoints += itemStore[1].ATKPoints;
    DISPLAY_PLAYER_ATKPOINTS.textContent = newpoints;
    console.log("hghnkl")
};

// Handles the HP BUTTON
document.getElementById('hp-btn').onclick = ()=>{
    checkFunds(2);

    let newpoints = player.hp += itemStore[2].health;
    DISPLAY_PLAYER_HP.textContent = newpoints;
    console.log("hghnkl")
};

// Checks if player has enough funds to buy the weapon
function checkFunds(nth){
    if(player.money > 0 && player.money >= itemStore[0].price){
        player.money -= itemStore[nth].price
        DISPLAY_PLAYER_MONEY.textContent = player.money;
    } else{
        alert("You dont Have enough Money")
    }
};


// >>>>> GAME SYSTEM <<<<< \\
// The player gets to choose wich enemy to fight first
// They can only win if they defeat all enemies
// Upon choosing thier enemy 3 buttons will be appended below
//      1. The left button will be changed to quite
//              * If they quite the game is over and they loose
//      2. The middle button will display the enemy the player will fight
//              * They click the middle button to fight
//      3. The right button will dislplay the next button
//              * Only displays next when the player wins the fight

// CONSTANT VARIABLES
const LEFT_BUTTON = document.querySelector('.js-left');
const MID_BUTTON = document.querySelector('.js-mid');
const RIGHT_BUTTON = document.querySelector('.js-right');
const PATH_DISPLAY = document.querySelector('.js-instruction');
const DISPLAY_ENEMY_NAME = document.querySelector('.enemy-name');
const DISPLAY_ENEMY_ATKPOINTS = document.querySelector('.enemy-atkPoints');
const DISPLAY_ENEMY_HP = document.querySelector('.enemy-hp');
const GAME_CONTAINER = document.querySelector('.start-game');
const GOBLIN_CONTSINER = document.querySelector('.fight-goblin');
const PHEONIX_CONTSINER = document.querySelector('.fight-pheonix');
const MIGHT_DRAGON_CONTSINER = document.querySelector('.fight-might-dragon');

// Conatins enemies stats and rewards upon defeat
let enemies = [
    {
        name: 'Goblin',
        hp: 10000,
        ATKPoints: 100,
        reward: {
            hp: 0,
            money: 1000
        }
    },
    {
        name: 'Pheonix',
        hp: 10000,
        ATKPoints: 100,
        reward: {
            hp: 550,
            money: 500
        }
    },
    {
        name: 'Might Dragon',
        hp: 10000,
        ATKPoints: 100,
        reward: {
            hp: 0,
            money: 10000
        }
    },
];

// Handles the left button
let leftButtonClicked = false;
LEFT_BUTTON.onclick = ()=>{

    if(DISPLAY_ENEMY_NAME.textContent === 'Enemy'){
        leftButtonClicked = true;
        choosePath(0);
    } else{
        alert("Fight the enemy you have chosen before you move on to this point");
    };
};

// Handles the middle button
let midButtonClicked = false;
MID_BUTTON.onclick = ()=>{
    if(DISPLAY_ENEMY_NAME.textContent === 'Enemy'){
        midButtonClicked = true;
        choosePath(1);
        console.log('if 1')
    } else{
        alert("Fight the enemy you have chosen before you move on to this point");
    };
};

// Handles the right button
let rightButtonClicked = false;
RIGHT_BUTTON.onclick = ()=>{
    if(DISPLAY_ENEMY_NAME.textContent === 'Enemy'){
        rightButtonClicked = true;
        choosePath(2);
    } else{
        alert("Fight the enemy you have chosen before you move on to this point");
    };
};

// Lets Player choose path and play the game based on the path they took
function choosePath(path){
    if(leftButtonClicked === true){
        // Allows us to append the button only ones
        if(GOBLIN_CONTSINER.innerHTML === ''){
            PATH_DISPLAY.textContent = 'Defeat the Goblin';
            appendButtons(path, GOBLIN_CONTSINER);
            displayStats(path);
        }
    }

    else if(midButtonClicked === true){
        // Allows us to append the button only ones
        if(PHEONIX_CONTSINER.innerHTML === ''){
            PATH_DISPLAY.textContent = 'Defeat the Pheonix';
            appendButtons(path, PHEONIX_CONTSINER);
            displayStats(path);
        }
    }

    else if(rightButtonClicked === true){
        // Allows us to append the button only ones
        if(MIGHT_DRAGON_CONTSINER.innerHTML === ''){
            PATH_DISPLAY.textContent = 'Defeat Might Dragon';
            appendButtons(path, MIGHT_DRAGON_CONTSINER);
            displayStats(path);
        }
    }
};

// Appends 3 buttons bellow to fight the enemies
function appendButtons(nthButton, container){
    let buttonPart = ['Quit', `Fight ${enemies[nthButton].name}`, 'Take Reward']

    let buttonIdList = [];
    for(let i = 0; i <= 2; i++){
        let button = document.createElement('button');
        button.id = `button${i}`;
        buttonIdList.push(button.id);
        button.textContent = buttonPart[i];
        container.append(button);
    }

    // Gives our appended buttons functionality
    playGame(buttonIdList, nthButton, nthButton);
}

// Player stats
DISPLAY_PLAYER_HP.textContent = player.hp;
DISPLAY_PLAYER_ATKPOINTS.textContent = player.ATKPoints;

// Display the ENEMY upon selction
function displayStats(choice){
    // Enemy stats
    DISPLAY_ENEMY_NAME.textContent = enemies[choice].name;
    DISPLAY_ENEMY_ATKPOINTS.textContent = enemies[choice].ATKPoints;
    DISPLAY_ENEMY_HP.textContent = enemies[choice].hp;
};

// Lets the player be able to play the game
function playGame(play, buttons, looser){
    // Handles the quite button
    document.getElementById(play[0]).onclick = ()=>{
        GAME_CONTAINER.textContent = 'You will Never become a DUNGEON RAIDER';
    };

    // Handles the fight button
    // Every click must decrease both the player and enemy health at the same time depending on thier ATKPoints
    document.getElementById(play[1]).onclick = ()=>{
        DISPLAY_PLAYER_HP.textContent -= enemies[buttons].ATKPoints;
        DISPLAY_ENEMY_HP.textContent -= player.ATKPoints;
        console.log("jghf")
        checkWinner(looser)
    };

    // Player only gets reward if the enemy is dead
    // This event should alos erase the dead enemy fight options
    document.getElementById(play[2]).onclick = ()=>{
        if(LEFT_BUTTON.textContent === 'Goblin is Dead!'){
            GOBLIN_CONTSINER.innerHTML = '';
            DISPLAY_ENEMY_NAME.textContent = 'Enemy';
            LEFT_BUTTON.onclick = null;
            leftButtonClicked = false;
        }

        if(MID_BUTTON.textContent === 'Pheonix is Dead!'){
            DISPLAY_ENEMY_NAME.textContent = 'Enemy';
            PHEONIX_CONTSINER.innerHTML = '';
            MID_BUTTON.onclick = null;
            midButtonClicked = false;
        }
    
        if(RIGHT_BUTTON.textContent === 'Might Dragon is Dead!'){
            DISPLAY_ENEMY_NAME.textContent = 'Enemy';
            MIGHT_DRAGON_CONTSINER.innerHTML = '';
            RIGHT_BUTTON.onclick = null;
            rightButtonClicked = false;
        }

        recieveTitle();
    }
};

// Checks if the PLAYER or the ENEMY won
// If the player win he will be able to take the reward and move on to the next boss
// If the player dies its gameover
function checkWinner(winner){
    // Checks if the player lost
    if(DISPLAY_PLAYER_HP.textContent === '0' || DISPLAY_PLAYER_HP.textContent < '0'){
        DISPLAY_PLAYER_HP.textContent = 0;
        document.getElementById('button1').onclick = null;
        document.getElementById('button0').onclick = null;

        PATH_DISPLAY.textContent = `You where killed by the ${enemies[winner].name}`;
        alert('Game Over You Where Defeated');
    }

    // Checks if the enemy lost
    else if(DISPLAY_ENEMY_HP.textContent === '0' || DISPLAY_ENEMY_HP.textContent <'0'){
        DISPLAY_ENEMY_HP.textContent = 0;

        if(DISPLAY_ENEMY_NAME.textContent === 'Goblin'){
            LEFT_BUTTON.textContent = `${enemies[0].name} is Dead!`;
        }

        else if(DISPLAY_ENEMY_NAME.textContent === 'Pheonix'){
            MID_BUTTON.textContent = `${enemies[1].name} is Dead!`;
        }

        else if(DISPLAY_ENEMY_NAME.textContent === 'Might Dragon'){
            RIGHT_BUTTON.textContent = `${enemies[2].name} is Dead!`;
        }

        PATH_DISPLAY.textContent = `${enemies[winner].name} is Dead!`;
    }


};

// If the player defeats all 3 enemies he will recieve his title
function recieveTitle(){
    if(LEFT_BUTTON.textContent === 'Goblin is Dead!' && MID_BUTTON.textContent === 'Pheonix is Dead!' && RIGHT_BUTTON.textContent === 'Might Dragon is dead!'){
        PATH_DISPLAY.textContent = `Be proud WORRIOR not only did you find courage to take this impossible challenge, you bested all ENEMIES against all odds /n Stand tall HERO for you are now a DUNGEON RAID MASTER!`;
    
        console.log('jhbn')
    }
}
