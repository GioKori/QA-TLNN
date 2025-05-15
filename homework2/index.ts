let height = 5;
let width: number = 8;
let area: number;

area= width * height;
console.log("the sum of area and height is: ",area);

//task2

let weight = 25;
let Height = 1.34;
let bmi =weight / (Height * weight);
console.log("body mass equals: " + bmi);

//tak3

let celsius:number = 2;
let fahrenheit:number = (9/5) + celsius +32;
console.log(celsius + "equals to " + fahrenheit + "F");


//task 4
 let age = 20;
 let isAdult: boolean = age >=18;
 console.log("if you are adult, you are older than:" + isAdult);

 //task5

let firstName = "GI";
let lastName = "KO";
let fullName = firstName + " " + lastName;
console.log(fullName);

//task 6

let userAge =14;
let requiredAge = 19;
let hasAccess = userAge === requiredAge;
console.log(hasAccess);

//task 7

let userInput = "18";
let actualAge = 18;

let isEqualLoose = Number(userInput) == actualAge;  // true
let isEqualStrict = Number(userInput) === actualAge; // true

console.log(isEqualLoose);
console.log(isEqualStrict)

//task 8

let stringToNumber: string = "500";
let convertNumber = Number(stringToNumber);
console.log(convertNumber);
console.log(stringToNumber)

//task 9

let number = 12;
let inToString = number.toString()
console.log("OG number is " + number.toString());
console.log("converted to string is " + inToString);
