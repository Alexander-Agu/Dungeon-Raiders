// A dungeon raider game where the player will decide carefully wich enemys to fight
// They can buy items in the shop that will help with their guest
// As they play the player and enemy health reduces depending on the player and enemy attack points
// Upon the player defeating one enemy he will be rewarded with money to be able to buy items at the shop
// If the health of the enemy is finished its game over
// If the player defeats an enemy they will be directed to the next enemy to battle


// >>>>> SHOP SYSTEM <<<<< \\
const itemStore = [
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

// Acess the shop by appending 3 buttons bellow the shop button
// the button should change to exit shop if shop is entered and back to shop if its exited
// Each button should add more points to health or ATKPoints if the player has enough money to buy the item
let shopEntered = false;
const shop = document.getElementById('js-shop');
shop.onclick = ()=>{
    // Handles when the player enters and axits the shop
    if(shopEntered === true){
        shop.textContent = 'Shop';
        shopEntered = false;
    } else{
        shop.textContent = 'Exit Shop'
        shopEntered = true;
    }
};

// Append 3 buttons on display
// The user should be able to buy items to increas chanches of survival

const storeContainer = document.querySelector('.shop-store');

function appendItems(){
/*     let shopItensDiv = document.createElement('div');
    shopItensDiv.className = 'shop-items';
    for(let i = 1; i <= 3; i++){
        let itemButton = document.createElement('button');
        itemButton.className = `button${i}`;
        itemButton.textContent = `${itemStore[i].name}`;
        shopItensDiv.append(itemButton)
    }

    storeContainer.append(shopItensDiv); */

    let shopItemsDiv = document.createElement('div');
    shopItemsDiv.className = 'shop-items';

    // Creates the Axe button
    let leftButton = document.createElement('button');
    leftButton.id = 'left-btn';
    leftButton.textContent = `${itemStore[0].name}: ${itemStore[0].ATKPoints}ATKpoints`;

    // Creates the sword button
    let midButton = document.createElement('button');
    midButton.id = 'mid-btn';
    midButton.textContent = `${itemStore[1].name}: ${itemStore[1].ATKPoints}ATKpoints`;

    // Creats the health potion button
    let rightButton = document.createElement('button');
    rightButton.id = 'right-btn';
    rightButton.textContent = `${itemStore[2].name}: ${itemStore[2].health}HP`;

    shopItemsDiv.append(leftButton, midButton, rightButton);
    storeContainer.append(shopItemsDiv);

    buying(leftButton.id, midButton.id, rightButton.id)

}

appendItems()

function buying(leftItem, midItem, rightItem){
    if( leftItem === 'left-btn'){
        document.getElementById(leftItem).onclick = ()=>{

        }

    }
    else if( midItem === 'mid-btn'){
        document.getElementById(midItem).onclick = ()=>{
            
        }
    }
     else if( rightItem === 'right-btn'){
        document.getElementById(rightItem).onclick = ()=>{
            
        }
    }
};