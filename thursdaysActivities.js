////////////// Object Activities ////////////////////
console.log("*****************ObjectActivities************************");


//////////// Activity 1
console.log("********************Activity 1*********************");
////////////////////////////////////////////////////////////


const person = {
    name: "Zvi",
    age: 21,
    sayHi() {
        return `Hello my name is ${this.name}`
    }
};


console.log(person.age);
console.log(person["name"]);


let thingINeed = "age"
console.log(person[thingINeed]);

person.favsongs =  [
    "I aint worried - One Republic", 
    "Bones - Imagine Dragons", 
    "Centuries - Fall Out Boy"
];
console.log(person);
console.log(person.favsongs);

console.log(person.sayHi());


//////////// Activity 2
console.log("********************Activity 2*********************");
////////////////////////////////////////////////////////////


const pet = {
    name: "Bob",
    typeOfPet: "Dog",
    age: 2,
    colour: "brown",
    eat() {
        return `${this.name} is eating.`
    },
    drink() {
        return `${this.name} is drinking.`
    }
};

console.log(pet);
console.log(pet.eat());
console.log(pet.drink());




//////////// Activity 3
console.log("********************Activity 3*********************")
////////////////////////////////////////////////////////////



const coffeeShop = {
    branch: "Manchester",
    drinksMenu: [
        "Coffee", 
        3.99,
        "Latte",
        4.25,
        "Mocha",
         4.15
    ],
    foodMenu: [
        "Brownie", 
        2.45,
        "Sandwich",
        3.75,
        "Cheesecake",
        5.55
    ],
    drinksOrdered(drink1, drink2, drink3) {
        drink2 = drink2 || ""
        drink3 = drink3 || ""
        let drinkItem1 = "";
        let drinkPrice1 = 0;
        let drinkItem2 = "";
        let drinkPrice2 = 0;
        let drinkItem3 = "";
        let drinkPrice3 = 0;
        for (i = 0; i < this.drinksMenu.length; i ++) {
            if (drink1 === this.drinksMenu[i]) {
                drinkItem1 = this.drinksMenu[i];
                drinkPrice1 = this.drinksMenu[i + 1];  
            }
            if (drink2 === this.drinksMenu[i]) {
                drinkItem2 = this.drinksMenu[i];
                drinkPrice2 = this.drinksMenu[i + 1];  
            }
            if (drink3 === this.drinksMenu[i]) {
                drinkItem3 = this.drinksMenu[i];
                drinkPrice3 = this.drinksMenu[i + 1];
            }
        };
        let drinkTotal = drinkPrice1 + drinkPrice2 + drinkPrice3;
        if (drinkItem1 == "") {
            console.log("Please input/ammend your order to something on the menu.")
        } else if (drinkItem2 == "") {
            console.log(`You have ordered a ${drinkItem1} for ${drinkPrice1}. your total is £${drinkTotal}`)
        }else if (drinkItem3 == "") {
            console.log(`You have ordered a ${drinkItem1} for ${drinkPrice1} and a ${drinkItem2} for ${drinkPrice2}. your total is £${drinkTotal}`)
        } else {
            console.log(`You have ordered a ${drinkItem1} for ${drinkPrice1}, a ${drinkItem2} for ${drinkPrice2} and a ${drinkItem3} for ${drinkPrice3}. your total is £${drinkTotal}`)
        }
    },
    foodOrdered(food1, food2, food3) {
        food2 = food2 || ""
        food3 = food3 || ""
        let foodItem1 = "";
        let foodPrice1 = 0;
        let foodItem2 = "";
        let foodPrice2 = 0;
        let foodItem3 = "";
        let foodPrice3 = 0;
        for (i = 0; i < this.foodMenu.length; i ++) {
            if (food1 === this.foodMenu[i]) {
                foodItem1 = this.foodMenu[i];
                foodPrice1 = this.foodMenu[i + 1];  
            }
            if (food2 === this.foodMenu[i]) {
                foodItem2 = this.foodMenu[i];
                foodPrice2 = this.foodMenu[i + 1];  
            }
            if (food3 === this.foodMenu[i]) {
                foodItem3 = this.foodMenu[i];
                foodPrice3 = this.foodMenu[i + 1];
            }
        };
        let foodTotal = foodPrice1 + foodPrice2 + foodPrice3;
        if (foodItem1 == "") {
            console.log("Please input/ammend your order to something on the menu.")
        } else if (foodItem2 == "") {
            console.log(`You have ordered a ${foodItem1} for ${foodPrice1}. your total is £${foodTotal}`)
        }else if (foodItem3 == "") {
            console.log(`You have ordered a ${foodItem1} for ${foodPrice1} and a ${foodItem2} for ${foodPrice2}. your total is £${foodTotal}`)
        } else {
            console.log(`You have ordered a ${foodItem1} for ${foodPrice1}, a ${foodItem2} for ${foodPrice2} and a ${foodItem3} for ${foodPrice3}. your total is £${foodTotal}`)
        }
    }
};

coffeeShop.drinksOrdered();
coffeeShop.drinksOrdered("Mocha");
coffeeShop.drinksOrdered("Mocha", "Coffee");
coffeeShop.drinksOrdered("Latte", "Coffee", "Mocha" );

coffeeShop.foodOrdered();
coffeeShop.foodOrdered("Sandwich");
coffeeShop.foodOrdered("Cheesecake", "Brownie");
coffeeShop.foodOrdered("Sandwich", "Cheesecake", "Brownie" );
