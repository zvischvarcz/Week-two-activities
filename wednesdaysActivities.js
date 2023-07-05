////////////// Function Activities ////////////////////
console.log("*****************Function Activities************************")

const favColour = (colour) => {
    console.log(`My favourite colour is ${colour}.`)
}

favColour ("Purple");


//////////// Activity 1
console.log("*****************Activity 1************************")
////////////////////////////////////////////////////////////

const factorial = (n) => {
    if((n === 0) || (n === 1)) {
        return 1;
    } else {
        return ( (n * factorial(n-1)));
    }
}

console.log(factorial(33))


//////////// Activity 2
console.log("*****************Activity 2************************")
////////////////////////////////////////////////////////////



let orderCount = 0;

const takeOrder = (topping1, topping2) => {
    orderCount ++;
    console.log(`order number ${orderCount}:`);
    console.log(`Pizza with ${topping1} and ${topping2}.`);
}

takeOrder("pineapple", "olives")
takeOrder("mushrooms", "onions")
takeOrder("peperoni", "extra cheese")



//////////// Activity 3
console.log("*****************Activity 3************************")
////////////////////////////////////////////////////////////

let accountNumber = 987654;
let pinNumber = 1234;
balance = 500;

const accountCheck = (accountInput) => {
    if (accountInput == accountNumber) {
        return true;
    } else {
        console.log("The account number entered is not recognized.");
        return false;
    }
}


const pinCheck = (pinInput) => {
    if (pinInput == pinNumber) {
        return true;
    } else {
        console.log("The PIN entered is incorrect.");
        return false;
    }
}


const balanceCheck = (withdrawalAmount) => {
    if (withdrawalAmount <= balance) {
        return true;
    } else {
        console.log ("Balance too low.");
        return false;
    }
}

const cashMachine = (accountInput, pinInput, withdrawalAmount) => {
    if (pinCheck(pinInput) && balanceCheck(withdrawalAmount) && accountCheck(accountInput)) {
        balance -= withdrawalAmount
        console.log(`You have withdrawn ${withdrawalAmount} successfully, your new balance is ${balance}.`) 
    }
}

cashMachine(897622, 1234, 200)
cashMachine(987654, 1234, 200)
cashMachine(987654, 1234, 200)
cashMachine(987654, 1235, 200)
cashMachine(987654, 1234, 200)
cashMachine(987654, 1234, 80)
