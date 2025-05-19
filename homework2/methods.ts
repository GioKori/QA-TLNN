//lets practice som methods.
class Book {
    author: string;
    pages: number;
    book: string;

    constructor(author: string, pages: number, book: string) {
        this.author = author;
        this.pages = pages;
        this.book = book;
    }
    //now methods with void  has no return value
    displayInfo(): void{
        console.log("this is method")
    }
    //now with boolean, has output

    isAdult(): boolean{
        return this.pages >= 18
    }
    //method with input
    updatePage(newPge: number):number{
        return this.pages = newPge
    }
}

const auth2 =new Book("a", 100, "as");
auth2.displayInfo();
auth2.updatePage(12)
console.log(auth2.isAdult());
console.log("new page size is " + auth2.pages);

//homework4

class Calculator{
        addition(a: number, b: number):number{
            return a+b;
        }

        isGreater(a: number,b: number): boolean {
            return a > b;
        }
}

const calc = new Calculator();
const res = calc.addition(12, 23)
const more = calc.isGreater(12, 23);

console.log(res);
console.log(more);

class Product{
    name: string;
    price: number;
    quantity: number;
    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    isInStock(): boolean{
        return this.price > 0;
    }
}
const check = new Product("book", 121,2)
console.log(check.isInStock());
console.log(`do we have ${check.name} in stock? and quantity is ${check.quantity} and it is in stock ${check.isInStock()}`);