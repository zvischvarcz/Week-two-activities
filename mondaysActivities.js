///////////// DOT NOTATION ///////////////

console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");

////////////////////////////////////////////////////////////
console.log("*****************************************");
////////////////////////////////////////////////////////////

const lines = ["   |   |   ", "-----------",];

for (let i = 0; i < 2; i++) {
    for (let i = 0; i <3; i++) {
        console.log(lines[0]);
         
    } 
    console.log(lines[1]);
}

for (let i = 0; i <3; i++) {
    console.log(lines[0]);
}


////////////////////////////////////////////////////////////
console.log("*****************************************");
////////////////////////////////////////////////////////////


let number = 0;
for (let i = 0; i <3; i++) {
    for (let i = 0; i <3; i++) {
        console.log(lines[0]); 
    }

   if(number < 2) {
    number++
    console.log(lines[1]);
   }
}

////////////////////////////////////////////////////////////
console.log("*****************************************");
////////////////////////////////////////////////////////////



///////////// VARIABLE OPERATORS ///////////////



//////////// Activity 1

let myName = "Zvi";
let myAge = 21;
let favColour = "pink";

console.log(`Hi, my name is ${myName}, I am ${myAge} years old and my favourite colour is ${favColour}.`);

myName = "Jack";
myAge = 45;
favColour = "green";

console.log(`Hi, my  other name is ${myName}, I am nearly ${myAge} years old and my least favourite colour is ${favColour}.`);



//////////// Activity 2
console.log("*****************************************");
////////////////////////////////////////////////////////////

let breakfastFood = "cereal";
let lunchFood = "toast";
let dinnerFood = "beef stew";

console.log(`Today I ate ${breakfastFood} for breakfast, ${lunchFood} for lunch and ${dinnerFood} for dinner.`);

breakfastFood = "eggs";
lunchFood = "sandwiches";
dinnerFood = "steak";

console.log(`Tomorrow I will eat ${breakfastFood} for breakfast, ${lunchFood} for lunch and ${dinnerFood} for dinner.`);



//////////// Activity 3
console.log("*****************************************");
////////////////////////////////////////////////////////////

const dateOfBirth = new Date("2001-09-28");
let today = new Date();
dateOfBirthMilliseconds = dateOfBirth.getTime();
todayMilliseconds = today.getTime();

differenceInMilliseconds = todayMilliseconds - dateOfBirthMilliseconds;
differenceInDays = Math.floor(differenceInMilliseconds / (1000*60*60*24));

console.log(`It has been ${differenceInDays} days since i was born!!`);



//////////// Activity 4
console.log("*****************************************");
////////////////////////////////////////////////////////////

let space1 = "x";
let space2 = "0";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "0";
let space8 = " ";
let space9 = " ";


console.log("   |   |   ");
console.log(` ${space1} | ${space2} | ${space3} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space4} | ${space5} | ${space6} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space7} | ${space8} | ${space9} `);
console.log("   |   |   ");