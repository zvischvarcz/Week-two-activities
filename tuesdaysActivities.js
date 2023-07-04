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
console.log("*****************************************")
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
console.log("*****************************************")
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
console.log("*****************************************")
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
console.log("*****************************************")
////////////////////////////////////////////////////////////


let num3 = "2020202";

let num3Reversed = num3.split("").reverse().join("");


if (num3 == num3Reversed) {
    console.log("This number is a pallindrome")
} else {
    console.log("This number is NOT a pallindrome")
}


//////////// Activity 6
console.log("*****************************************")
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
console.log("*****************************************")
////////////////////////////////////////////////////////////




let longString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let vowels = ["a", "e", "i", "o", "u"]

const lastVowel =  Math.max.apply(null, vowels.map(letter => longString.lastIndexOf(letter)))

console.log(lastVowel)


//////////// Activity 8
console.log("*****************************************")
////////////////////////////////////////////////////////////



let word ="hello"

if (word[0] == word.slice(-1)) {
    console.log("true")
} else {
    console.log("false")
}


//////////// Activity 9
console.log("*****************************************")
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


//////////// Activity 1

favSongs = ["I aint worried - One Republic", "Bones - Imagine Dragons", "Centuries - Fall Out Boy"]
console.log(favSongs)
favSongs.push("More - Usher", "I'm Good - David Guetta")
console.log(favSongs)
favSongs.pop()
console.log(favSongs)