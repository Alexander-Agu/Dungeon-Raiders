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

let displayATKPoints = document.getElementById('player-attack');
let displayHealthPoints = document.getElementById('player-healthp');
let displayPlayerMoney = document.getElementById('player-money');


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
    displayATKPoints.textContent = newpoints;
    console.log("hghnkl")
};

// Handles the SWORD BUTTON
document.getElementById('sword-btn').onclick = ()=>{
    checkFunds(1);

    let newpoints = player.ATKPoints += itemStore[1].ATKPoints;
    displayATKPoints.textContent = newpoints;
    console.log("hghnkl")
};

// Handles the HP BUTTON
document.getElementById('hp-btn').onclick = ()=>{
    checkFunds(2);

    let newpoints = player.hp += itemStore[2].health;
    displayHealthPoints.textContent = newpoints;
    console.log("hghnkl")
};

// Checks if player has enough funds to buy the weapon
function checkFunds(nth){
    if(player.money > 0 && player.money >= itemStore[0].price){
        player.money -= itemStore[nth].price
        displayPlayerMoney.textContent = player.money;
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

// CONSTANT BUTTON
const LEFT_BUTTON = document.querySelector('.js-left');
const MID_BUTTON = document.querySelector('.js-mid');
const RIGHT_BUTTON = document.querySelector('.js-right');

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

LEFT_BUTTON.addEventListener('click', ()=>{
    dislplayEnemy(enemies[0].name);
});

MID_BUTTON.addEventListener('click', ()=>{
    dislplayEnemy(enemies[1].name)
});

RIGHT_BUTTON.addEventListener('click', ()=>{
    dislplayEnemy(enemies[2].name)
})

function dislplayEnemy(choice){
    LEFT_BUTTON.textContent = 'quit';
    MID_BUTTON.textContent = choice;
    RIGHT_BUTTON.textContent = 'next'
}