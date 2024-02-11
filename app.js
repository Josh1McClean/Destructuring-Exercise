// Object Destructuring 1
let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;

console.log(numPlanets); //8
console.log(yearNeptuneDiscovered); //1846

// Object Destructuring 2
let planetFacts = {
    numPlanetss: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};
let { numPlanetss, ...discoveryYears } = planetFacts;

console.log(discoveryYears); //{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// Object Destructuring 3
function getUserData({ firstName, favoriteColor = "green" }) {
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}
getUserData({ firstName: "Alejandro", favoriteColor: "purple" }) // `Your name is Alejandro and you like purple`
getUserData({ firstName: "Melissa" }) //'Your name is Melissa and you like green'
getUserData({}) //'Your name is undefined and you like green'

// Array Destructuring 1
let [first, second, third] = ["Mimi", "Angie", "Ivory"];

console.log(first); //Mimi
console.log(second); //Angie
console.log(third); //Ivory

// Array Destructuring 2
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]
console.log(raindrops); //Raindrops on roses
console.log(whiskers); //whiskers on kittens
console.log(aFewOfMyFavoriteThings); //(3)["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"] 

// Array Destructuring 3
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // 10, 30, 20

// ES5 Assigning Variables to Object Properties
var objj = {
    numbers: {
        a: 1,
        b: 2
    }
};
var aa = objj.numbers.a;
var bb = objj.numbers.b;
// ES2015 Object Destructuring
/* Write an ES2015 Version */
let obj = {
    numbers: {
        a: 1,
        b: 2
    }
};
let { a, b } = obj.numbers;

// ES5 Array Swap
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
// ES2015 One - Line Array Swap with Destructuring
/* Write an ES2015 Version */
let arra = [1, 2];
[arra[0], arra[1]] = [arra[1], arra[0]];

//raceResults()
let raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest });

raceResults(['Nemo', 'Nata', 'Dizzy', 'Amoney', 'G'])