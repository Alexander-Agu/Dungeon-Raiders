// A dungeon raider game where the player will decide carefully wich enemys to fight
// They can buy items in the shop that will help with their guest
// As they play the player and enemy health reduces depending on the player and enemy attack points
// Upon the player defeating one enemy he will be rewarded with items
// If the player defeats an enemy they will be directed to the next enemy to battle

// >>>>> PLAYER <<<<< \\
let player = {
    hp: 1000,
    ATKPoints: 2000,
    money: 1000
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
// Upon choosing thier enemy 
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

// Conatins enemies stats and rewards upon defeat
let enemies = [
    {
        name: 'Goblin',
        hp: 10000,
        ATKPoints: 1000,
        reward: {
            hp: 0,
            money: 1000
        }
    },
    {
        name: 'Pheonix',
        hp: 20000,
        ATKPoints: 1000,
        reward: {
            hp: 550,
            money: 500
        }
    },
    {
        name: 'Might Dragon',
        hp: 50000,
        ATKPoints: 2700,
        reward: {
            hp: 0,
            money: 10000
        }
    },
];

// Handles the left button
LEFT_BUTTON.addEventListener('click', ()=>{
    choosePath(enemies[0].name);
});

// Handles the middle button
MID_BUTTON.addEventListener('click', ()=>{
    choosePath(enemies[1].name);
});

// Handles the right button
RIGHT_BUTTON.addEventListener('click', ()=>{
    choosePath(enemies[2].name);
});

// Lets Player choose path and play the game based on the path they took
function choosePath(path){
    displayStats(path)

    if(MID_BUTTON.textContent === `fight ${enemies[0].name}`){
        playGame(0);
    }

    else if(MID_BUTTON.textContent === `fight ${enemies[1].name}`){
        playGame(1);
    }

    else if(MID_BUTTON.textContent === `fight ${enemies[2].name}`){
        playGame(2);
    };
};

// Display the ENEMY & PLAYER stats and changes them depending on the gameplay
function displayStats(choice){
    LEFT_BUTTON.textContent = 'quit';
    MID_BUTTON.textContent = `fight ${choice}`;
    RIGHT_BUTTON.textContent = '*';
    // Player stats
    DISPLAY_PLAYER_HP.textContent = player.hp;
    DISPLAY_PLAYER_ATKPOINTS.textContent = player.ATKPoints;

    // Enemy stats
    if(choice === enemies[0].name){
        DISPLAY_ENEMY_NAME.textContent = enemies[0].name;
        DISPLAY_ENEMY_ATKPOINTS.textContent = enemies[0].ATKPoints;
        DISPLAY_ENEMY_HP.textContent = enemies[0].hp;
    }
    else if(choice === enemies[1].name){
        DISPLAY_ENEMY_NAME.textContent = enemies[1].name;
        DISPLAY_ENEMY_ATKPOINTS.textContent = enemies[1].ATKPoints;
        DISPLAY_ENEMY_HP.textContent = enemies[1].hp;
    }
    else if(choice === enemies[2].name){
        DISPLAY_ENEMY_NAME.textContent = enemies[2].name;
        DISPLAY_ENEMY_ATKPOINTS.textContent = enemies[2].ATKPoints;
        DISPLAY_ENEMY_HP.textContent = enemies[2].hp;
    }

}

// Lets the player be able to play the game
function playGame(play){
    // Handles the quite button
    LEFT_BUTTON.addEventListener('click', ()=>{
        PATH_DISPLAY.textContent = 'You will Never become a DUNGEON RAIDER';
    });

    // Handles the fight enemy button
    MID_BUTTON.addEventListener('click', ()=>{
        DISPLAY_PLAYER_HP.textContent -= enemies[play].ATKPoints;
        DISPLAY_ENEMY_HP.textContent -= player.ATKPoints;

        // Checks if the player or enemies health is at zero
        if(DISPLAY_PLAYER_HP.textContent - DISPLAY_ENEMY_ATKPOINTS.textContent < 0){
            player.hp = 0;
            DISPLAY_PLAYER_HP.textContent = player.hp;
        }

        else if(DISPLAY_ENEMY_HP.textContent - DISPLAY_ENEMY_ATKPOINTS.textContent < 0){
            enemies[play].hp = 0;
            DISPLAY_ENEMY_HP.textContent = enemies[play].hp;
        }
    });
};

function checkWin(){

}