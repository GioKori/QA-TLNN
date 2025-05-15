//lets make some functions work

function convertToFahrenheit(celsius: number): number {
    return (celsius / 9) * 5;
}
console.log(convertToFahrenheit(3))
console.log("3 degrees in farhenheit is " + convertToFahrenheit(3));

function greetUser(firstName: string, lastName: string): string {
    return firstName + lastName;
}
console.log(greetUser("Anna ", "Miller"));
console.log("Hello, " + greetUser("Anna ", "Miller!"));

function calculateArea(width: number, height: number): number {
    return width * height;
}
console.log(calculateArea(12, 32))


function addNumber(a: number, b: number): number {
    return a + b;
}
console.log(addNumber(1, 2))
console.log("1 + 3 = " + addNumber(1, 3));

//lets remember classes :)

class Person{
    firstname:string;
    lastname:string;
}
const  persona1 = new Person()
persona1.firstname = "Georgian";
persona1.lastname = "Kood";
console.log(persona1)
console.log(persona1.firstname + " " + persona1.lastname);

class Book {
    title: string;
    author: string;
    pages: number;
    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

const exampleBook = new Book("Leather of the tiger", "Rustaveli", 1000)
console.log(exampleBook);
console.log("this book " +exampleBook.title + " is written by " + exampleBook.author + " and has more than " + exampleBook.pages +"!");