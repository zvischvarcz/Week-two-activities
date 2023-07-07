//////////// Activity 1
console.log("********************Activity 1*********************");
////////////////////////////////////////////////////////////


for (let i = 0; i < 100; i ++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

//////////// Activity 2
console.log("********************Activity 2*********************");
////////////////////////////////////////////////////////////

let shoppingListitems = [
    "Apples",
    "Bannanas",
    "Coke",
    "Crisps"
]


const shoppingList = (action, item) => {
    if (action == "add"){
        if (shoppingListitems.indexOf(item) === -1){
            shoppingListitems.push(item);
        } else {
            console.log("This item already exists in the list.");
        }
    } else if (action == "remove") {
        if (shoppingListitems.includes(item) == false) {
            console.log("This item does not exist in the list.")
        } else {
            location = shoppingListitems.indexOf(item)
            shoppingListitems = shoppingListitems.slice(0, location).concat(shoppingListitems.slice(location+1))
        }
    }
    console.log(shoppingListitems)
}

shoppingList("add", "Apples")
shoppingList("add", "Strawberries")

shoppingList("remove", "Soap")
shoppingList("remove", "Crisps")


//////////// Activity 3
console.log("********************Activity 3*********************");
////////////////////////////////////////////////////////////


let goodFortunes = [
    "You will have a good day",
    "Good luck will befall you",
    "Money will come easily",
    "This year will be your best one yet",
    "Bad moods are a thing of the past"
];

let badFortunes = [
    "Bad moods are to come",
    "This year will be your worst one yet",
    "Bad luck will befall you",
    "You will have a bad day",
    "Money will not come easily"
];

const magicEightBall = (question) => {
    let randomNumber = Math.floor(Math.random() * 5)
    if (question.length % 2 == 0) {
        console.log(goodFortunes[randomNumber]);
    } else {
        console.log(badFortunes[randomNumber]);
    }

}

magicEightBall("What is my fortune?");
magicEightBall("What is my fortune??");


//////////// Activity 4
console.log("********************Activity 4*********************");
////////////////////////////////////////////////////////////



let wholeNumbers = [
    1,
    3,
    5,
    6,
    8,
    9
];


let ammountOfCorrect = 0

for (let i = 0; i < wholeNumbers.length; i ++) {
    let randomNumber1 = Math.floor(Math.random() *10)
    if (wholeNumbers[i] === randomNumber1) {
        ammountOfCorrect ++
    }
};

if (ammountOfCorrect <= 1){
    console.log(`No win - amount of matches ${ammountOfCorrect}`)
} else if ( ammountOfCorrect == 2) {
    console.log(`You win £10 - amount of matches ${ammountOfCorrect}`)
}  else if ( ammountOfCorrect > 2 && ammountOfCorrect < 6) {
    console.log(`You win £1000 - amount of matches ${ammountOfCorrect}`)
} else {
    console.log(`You win £10 - amount of matches ${ammountOfCorrect}`)
};



//////////// Activity 5
console.log("********************Activity 5*********************");
////////////////////////////////////////////////////////////


const object1 = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4"
};


for (let [key, value] of Object.entries(object1)) {
   console.log(key, value)
};


//////////// Activity 6
console.log("********************Activity 6*********************");
////////////////////////////////////////////////////////////

let students = [
    " Sam", 
    " Li", 
    " Yusef", 
    " Demi", 
    " Kim", 
    " Yasir", 
    " Keira", 
    " Shaun", 
    " Melina"
];

deskOne = [];
deskTwo = [];
deskThree = [];


for (let i = 0; i < students.length; i ++) {
    let desk = Math.ceil(Math.random() * 3);
    if (desk == 1) {
        deskOne.push(students[i])
    } else if (desk == 2) {
        deskTwo.push(students[i])
    } else {
        deskThree.push(students[i])
    }
};

console.log(`The students in desk one are ${deskOne}.`);
console.log(`The students in desk two are ${deskTwo}.`);
console.log(`The students in desk three are ${deskThree}.`);
