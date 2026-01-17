class book {
    #title;
    #numofChapters;
    #author;
    #numofPages;
    #publisher;
    #numofCopies;
    #type;
    constructor(title, numofChapters, author, numofPages, publisher, numofCopies, type) {
        this.#title = title;
        this.#numofChapters = numofChapters;
        this.#author = author;
        this.#numofPages = numofPages;
        this.#publisher = publisher;
        this.#numofCopies = numofCopies;
        this.#type = type;
    }

    getName(){
        return this.#title;
    }

    getType(){
        return this.#type;
    }

    toString() {
        return `Title: ${this.#title}\nNumber of Chapters: ${this.#numofChapters}\nAuthor: ${this.#author}\nNumber of Pages: ${this.#numofPages}\nPublisher: ${this.#publisher}\nNumber of Copies: ${this.#numofCopies}`;
    }
}

class box {
    #height;
    #width;
    #length;
    #numofBooks;
    #volume;
    #material;
    #content;
    constructor(height, width, length, numofBooks, material, content) {
        this.#height = height;
        this.#width = width;
        this.#length = length;
        this.#numofBooks = numofBooks;
        this.#volume = this.#height * this.#width * this.#length;
        this.#material = material;

        for (let i = 0; i < content.length; i++) {
            if (!(content[i] instanceof book)){
                throw new Error("Content must be an array of book objects");
            }
        }


        this.#content = content;
    }

    addBook(newBook) {
        if (!(newBook instanceof book)) {
            throw new Error("Content must be a book object");
        }   
        this.#content.push(newBook);
        this.#numofBooks++;
    }

    getNumofBooks() {
        return this.#numofBooks;
    }

    valueof(otherBox) {
        if(!(otherBox instanceof box)) {
            throw new Error("Argument must be a box object");
        }   
        return this.#numofBooks + otherBox.getNumofBooks();
    }

    deleteBook(name = "" , type = ""){
        if(!name && !type){
            throw new Error("Name or Type must be passed");
        }
        this.#content = this.#content.filter(book => {
            if (name) {
                return book.getName() !== name;
            }
            if (type) {
                return book.getType() !== type;
            }
            return true;
    });
        this.#numofBooks = this.#content.length;
    }
}


// Example usage:
const book1 = new book("The Great Gatsby", 9, "F. Scott Fitzgerald", 180, "Scribner", 500, "Drama");
const book2 = new book("1984", 24, "George Orwell", 328, "Secker & Warburg", 1000, "Drama");
const box1 = new box(10, 10, 10, 2, "Cardboard", [book1, book2]);
console.log(book1.toString());
console.log(`Number of books in box1: ${box1.getNumofBooks()}`);
const box2 = new box(15, 15, 15, 0, "Wood", []);
box2.addBook(book1);
console.log(`Total number of books in box1 and box2: ${box1.valueof(box2)}`);
box1.deleteBook("","Drama");

console.log(`Number of books in box1: ${box1.getNumofBooks()}`);