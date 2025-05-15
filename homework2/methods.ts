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
    updatePage(newPge: number):void{
        return thi.pages = 123;
    }
}

const auth2 =new Book("a", 100, "as");
auth2.displayInfo();
console.log(auth2.isAdult());
console.log("new page size is " + auth2.pages);