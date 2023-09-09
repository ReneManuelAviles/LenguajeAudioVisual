//Mostrar en un log de info toda la informacion del usuario que ese esta prestando un libro
//mostrar em im ñpf de omfo toda la informcion del usuario que esta retornando un libro
//tip debe mostrar el objeto completo del usuario
class Book {
    constructor(public title: string, 
        public author: string,
        public isLoaded:boolean =false,
        public isAvaliable:string) {}
}
class User {
    constructor(public userID:string,public name:string){

    }
}

interface ILoadManager{
    loadBook(book:Book,user:User)
}

interface Ilogger {
    log(message:string) : void;
}

class ConsoleLogger implements Ilogger {
    log(message: string): void {
        console.log(message);
    }
}

class Library {
    private books: Book[] = [];
    private loadBooks:Map<string,User>=new Map();
    private letBooks:Map<string,User>=new Map();
    constructor(private logger: Ilogger){}

    addBook(book: Book) {
        this.books.push(book);
    }

    findBookByTitle(title: string) : Book | undefined {
        return this.books.find(book => book.title === title);
    }
    loadBook(book: Book,user:User):void{
        if (!book.isLoaded) {
            this.logger.log('Book is loaded')
            return
        }
        this.loadBooks.set(book.isAvaliable,user);
        book.isLoaded=true;
        this.logger.log(`${book.title} has been returned`)
    }
    retunBook(book: Book) {
        if (!book.isLoaded) {
            this.logger.log('Book is not loaded')
            return
        }

        this.loadBooks.delete(book.isAvaliable);
        book.isLoaded=false;
        this.logger.log(`${book.title} has been returned`)
    }
    PersonaLetBook(book: Book,user:User) {
        if (!book.isLoaded) {
            this.logger.log('Book was retuned success')
            return
        }

        this.letBooks.set(book.isAvaliable,user);
        book.isLoaded=false;
        this.logger.log(`${book.title} has been returned`)
    }
    retunPersonaBook(book: Book) {
        if (!book.isLoaded) {
            this.logger.log('Book was retuned success')
            return
        }

        this.loadBooks.delete(book.isAvaliable);
        book.isLoaded=false;
        this.logger.log(`${book.title} has been returned`)
    }



    
}

const logger = new ConsoleLogger();
const library =new Library(logger);
//const book1 = new Book('libro1','autor1');

//library.addBook(book1);
library.findBookByTitle('libro1')


