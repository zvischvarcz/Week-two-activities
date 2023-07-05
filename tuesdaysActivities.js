////////////// If Else Activities ////////////////////


//////////// Activity 1

let age = 15
let country = "UK"

if (age > 17 && country == "UK") {
    console.log("Yes I can serve you.")
} else {
    console.log("You aren't old enough.")
}

//////////// Activity 2
console.log("***************Activity 2**************************")
////////////////////////////////////////////////////////////


let topping = "pineapple"

switch(topping) {
    case "olives":
    case "cheese":
        console.log("These are important ingredients for my pizza.")
        break;
    case "mushrooms":
        console.log(`I don't mind having ${topping} on my pizza.`)
        break;
    default:
        console.log(`${topping} should not be on a pizza.`)
}

//////////// Activity 3
console.log("******************Activity 3***********************")
////////////////////////////////////////////////////////////


let password = "qwerty123"

if (password.length < 8) {
    console.log("Password is too short!")
} else {
    console.log (`${password}`)
}



let num1 = 11

if (num1 % 3 == 0 || num1 % 5 == 0) {
    console.log("This number is divisible by 3 or 5")
} else {
    console.log("This number is NOT divisible by 3 or 5")
}



//////////// Activity 4
console.log("*********************Activity 4********************")
////////////////////////////////////////////////////////////


let num2 = 15

if (num2 % 3 == 0 && num2 % 5 == 0) {
    console.log("fizz buzz")
} else if (num2 % 3 == 0){
    console.log("fizz")
} else if (num2 % 5 == 0){
    console.log("buzz")
} else {
    console.log(`${num2}`)
}

//////////// Activity 5
console.log("********************Activity 5*********************")
////////////////////////////////////////////////////////////


let num3 = "2020202";

let num3Reversed = num3.split("").reverse().join("");


if (num3 == num3Reversed) {
    console.log("This number is a pallindrome")
} else {
    console.log("This number is NOT a pallindrome")
}


//////////// Activity 6
console.log("*******************Activity 6**********************")
////////////////////////////////////////////////////////////



let time = 830
let placeOfWork = "Blackpool"
let townOfHome = "Manchester"

if (time <= 700 || time > 1700) {
    console.log(`I'm at home in ${townOfHome}.`)
} else if ( time > 700 && time <= 800) {
    console.log(`I'm commuting to ${placeOfWork}.`)
}else {
    console.log(`I'm at work in ${placeOfWork}.`)
}

//////////// Activity 7
console.log("********************Activity 7*********************")
////////////////////////////////////////////////////////////




let longString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let vowels = ["a", "e", "i", "o", "u"]

const lastVowel =  Math.max.apply(null, vowels.map(letter => longString.lastIndexOf(letter)))

console.log(lastVowel)


//////////// Activity 8
console.log("********************Activity 8*********************")
////////////////////////////////////////////////////////////



let word ="hello"

if (word[0] == word.slice(-1)) {
    console.log("true")
} else {
    console.log("false")
}


//////////// Activity 9
console.log("*****************Activity 9************************")
////////////////////////////////////////////////////////////




let num4 = 15
let num5 = 2
let num6 = num4 + num5

if (num6 % 2 == 0) {
    console.log(num4 + num5)
} else {
    console.log(num4 * num5)
}



////////////// Array Activities ////////////////////
console.log("*****************Array Activities************************")


//////////// Activity 1
console.log("********************Activity 1*********************")
////////////////////////////////////////////////////////////



favSongs = ["I aint worried - One Republic", "Bones - Imagine Dragons", "Centuries - Fall Out Boy"]
console.log(favSongs)
favSongs.push("More - Usher", "I'm Good - David Guetta")
console.log(favSongs)
favSongs.pop()
console.log(favSongs)



//////////// Activity 2
console.log("*******************Activity 2**********************")
////////////////////////////////////////////////////////////


// The .map method creates a new array from another with condditions applied. I this case the .map creates a new array with the numbers from arrayOne doubled.

let arrayOne = [5, 10, 15, 20];
let mapOne = arrayOne.map(x => x * 2);
console.log(mapOne)



////////////// Loop Activities ////////////////////
console.log("*****************Loop Activities************************")


//////////// Activity 1
console.log("*****************Activity 1************************")
////////////////////////////////////////////////////////////



let favFilms = [
    "John wick",
    "Hobbs & Shaw",
    "Anna",
    "Spy",
    "The Expendables"
]

favFilms.push("Operation Fortune", "The Gentlemen")

for (let i = 0; i < favFilms.length; i++) {
    console.log(favFilms[i])
}


//////////// Activity 2
console.log("******************Activity 2***********************")
////////////////////////////////////////////////////////////


for (let i = 0; i < 6; i++) {
    console.log(Math.floor(Math.random()*50))
}


//////////// Activity 3
console.log("*********************Activity 3********************")
////////////////////////////////////////////////////////////



for (let i = 9; i > 0; i--) {
    console.log(i)
}



//////////// Activity 4
console.log("*******************Activity 4**********************")
////////////////////////////////////////////////////////////



let films = [
    "John wick",
    "Hobbs & Shaw",
    "Ghostbusters",
    "Spy"
]

for (let i = 0; i < films.length; i++) {
    console.log(films[i])
}

if (films[2] == "Ghostbusters") {
    console.log("Yay its Ghostbusters")
} else {
    console.log("Boo! We want Ghostbusters")
}



//////////// Activity 5
console.log("******************Activity 5***********************")
////////////////////////////////////////////////////////////


for (let i = 0; i < 6; i++) {
    let numDiv = (Math.ceil(Math.random()*30))
    if (numDiv % 7 == 0) {
        console.log(`This number - ${numDiv} - is divisible by 7.`)
    }
}



//////////// Activity 6
console.log("*********************Activity 6********************")
////////////////////////////////////////////////////////////


let bobsFollowers = [
    "John",
    "Jack",
    "Mary",
    "Zvi"
]

let hannahsFollowers = [
    "Zvi",
    "Mary",
    "Mia",
    "Leah"
]

matchingFollowers = []

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < hannahsFollowers.length; j++) {
        if (bobsFollowers[i] == hannahsFollowers[j]) {
            matchingFollowers.push(bobsFollowers[i])
        }
 }
}
console.log(matchingFollowers)


//////////// Activity 7
console.log("*********************Activity 7********************")
////////////////////////////////////////////////////////////

///do....while loop ////
let i = 0;
do {
    i ++;
    console.log(i);
}

while (i < 10)


// pro/con (depending on uses case): will execute the first itteration even if the condition is false
// con:A bit more complicated and harder to read in my opinion.


///while loop ////

let j = 0;
while (j < 10) {
    j ++;
    console.log(j);
}
 

///for loop ////

for (let k = 0; k < 10; k++) {
    console.log(k)
} 

// pro: very simple and easy to read.
